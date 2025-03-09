// complete video details type

export interface ChannelDetails {
    title: string;
    subscribers: string;
    thumbnail: string;
}


export interface VideoDetails {
    title: string;
    views: string;
    likes: string;
    comments: string;
    thumbnail: string;
    channel: ChannelDetails;
    publishedAt: string;
 
}
