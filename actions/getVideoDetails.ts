'use server'

import {google} from 'googleapis';
import { VideoDetails } from '@/types/types';

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
})

export async function getVideoDetails(videoId: string) {
    console.log('Fetching video details for ', videoId);
        try{
            const response = await youtube.videos.list({
                part: ['snippet', 'statistics'],
                id: [videoId]
            })
            const videoDetails = response.data.items?.[0];
            if(!videoDetails){
                throw new Error('Video details not found');
            }
           
            // Get channel details inclusing the thumbnail
            const channelResponse = await youtube.channels.list({
                part: ['snippet','statistics'],
                id: [videoDetails.snippet?.channelId || ''],
                key: process.env.YOUTUBE_API_KEY,
            })
            const channelDetails = channelResponse.data.items?.[0];
      
            console.log('Channel details: ', channelDetails);
            
            // Get video info
            const video : VideoDetails = {
              // Video Matrix
              title: videoDetails.snippet?.title || 'Unknown Title',
              thumbnail: 
                videoDetails.snippet?.thumbnails?.maxres?.url ||
                videoDetails.snippet?.thumbnails?.high?.url ||               videoDetails.snippet?.thumbnails?.default?.url || '',
              publishedAt: videoDetails.snippet?.publishedAt || new Date().toISOString(),
              views: videoDetails.statistics?.viewCount || '0',
              likes: videoDetails.statistics?.likeCount || '0',
              comments: videoDetails.statistics?.commentCount || '0',

              // Channel Matrix
              channel : {
                title: videoDetails?.snippet?.channelTitle || 'Unknown Channel',
                thumbnail: channelDetails?.snippet?.thumbnails?.default?.url || '',
                subscribers: channelDetails?.statistics?.subscriberCount || '0',
              }

            }

            return video;
        } catch(error){
            console.error('Error fetching video details for ', videoId, error);
            throw error;
        }
}

