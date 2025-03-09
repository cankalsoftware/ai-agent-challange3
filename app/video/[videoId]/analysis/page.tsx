'use client'
import ThumbnailGeneration from "@/components/ThumbnailGeneration";
import TitleGeneration from "@/components/TitleGeneration";
import Transcription from "@/components/Transcription";
import Usage from "@/components/Usage";
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails";
import { FeatureFlag } from "@/features/flags";
import { useParams } from "next/navigation";

function AnalysisPage() {
  const params = useParams<{videoId: string}>();
  const {videoId} = params;


  return (
    <div className="xl:container mx-auto px-4 py-8 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left Sidebar */}
      <div className="order-2 lg:order-1 flex flex-col gap-4 bg-white lg:border-r border-gray-200 p-6 ">
        {/* Analysis section */}
        <div className='flex flex-col gap-4 p-4 border border-gray-200 rounded-xl'>
          <Usage
          featureFlag = {FeatureFlag.ANALYSE_VIDEO}
          title = "Video Analysis"
          />
        {/* Video details */}
        </div>

     {/*Youtubevideo details */}
     <YoutubeVideoDetails videoId={videoId} />


     {/* Thumbnail generation section */}
     <ThumbnailGeneration videoId={videoId} />

     {/* Title generation section */}
     <TitleGeneration videoId={videoId} />
     {/* Transcription section */}
     <Transcription videoId={videoId} />
     <p> Youtube video details </p>

      </div>

  





      {/* Right Sidebar */}
      <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]">
        {/* AI agent chat section */}
        <p>Chat section </p>
      </div>



      </div>
    </div>
  )
}

export default AnalysisPage;