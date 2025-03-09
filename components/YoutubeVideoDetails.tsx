'use client'
import { getVideoDetails } from "@/actions/getVideoDetails";
import { VideoDetails } from "@/types/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Eye, MessageCircle, ThumbsUp } from "lucide-react";

function YoutubeVideoDetails({videoId}: {videoId: string}) {

    const[video, setVideo] = useState<VideoDetails | null>(null);

useEffect(() => {
    const fetchVideoDetails = async () => {
        const video = await getVideoDetails(videoId);
        setVideo(video);
    }
    fetchVideoDetails();
},[videoId])

if(!video){
    return (
      <div className="flex items-center justify-center p-8">
        {videoId ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        ) : (
          <div className="text-gray-500">Video not found</div>
        )}
      </div>
    )
}


  return (
    <div className='@container bg-white rounded-xl' >
        <div className="flex flex-col gap-8">
            {/* Video Thumbnail */}
            <div className ='flex-shrink-0 '>
                <Image
                src={video.thumbnail}
                alt={video.title}
                width={1000}
                height={1000}
                className="w-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                />
            </div>

            {/* Video Details */}
            <div className="flex-grow space-y-4">
                <h1 className="text-2xl @lg:text-3xl font-bold text-gray-800 leading-tight line-clamp-2">{video.title}</h1>
                <p className="text-gray-600">{video.channel.title}</p>
                <p className="text-gray-600">{video.views} views</p>
            </div>
            {/* Channel Details */}
            <div className="flex items-center gap-4">
                <Image
                src={video.channel.thumbnail}
                alt={video.channel.title}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-gray-200 @md:w-12 @md:h-12"
                />
                <div className="flex flex-col">
                    <p className="text-base @md:text-lg text-gray-800 font-medium">{video.channel.title}</p>
                    <p className="text-sm text-gray-600 @md:text-base">{video.channel.subscribers} subscribers</p>
                </div>
            </div>

            {/* Video Stats */}
            {/* Published */}
            <div className="grid grid-cols-2 @lg:grid-cols-4 gap-4 pt-4">
                <div className="bg-gray-50 rounded-lg p-3 trasition-all duration-300 hover:bg-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <p className="text-sm text-gray-600 @md:text-base">Published</p>
                    </div>
                    <p className="text-gray-800 font-medium">{new Date(video.publishedAt).toLocaleDateString()}</p>
                </div>
          

                {/* Views */}
                <div className="bg-gray-50 rounded-lg p-3 trasition-all duration-300 hover:bg-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                        <Eye className="w-4 h-4 text-gray-600" />
                        <p className="text-sm text-gray-600">Views</p>
                    </div>
                    <p className="front-medium text-gray-900">{video.views}</p>
                </div>
        
                {/* Likes */}
                <div className="bg-gray-50 rounded-lg p-3 trasition-all duration-300 hover:bg-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                        <ThumbsUp className="w-4 h-4 text-gray-600" />
                        <p className="text-sm text-gray-600">Views</p>
                    </div>
                    <p className="front-medium text-gray-900">{video.likes}</p>
                </div>

                {/* Comments */}
                <div className="bg-gray-50 rounded-lg p-3 trasition-all duration-300 hover:bg-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                        <MessageCircle className="w-4 h-4 text-gray-600" />
                        <p className="text-sm text-gray-600">Comments</p>
                    </div>
                    <p className="front-medium text-gray-900">{video.comments}</p>
                </div>

            </div>




         </div>




    </div>
  )
}

export default YoutubeVideoDetails