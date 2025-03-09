'use client';

import { useUser } from "@clerk/nextjs";
import Usage from "./Usage";
import { FeatureFlag } from "@/features/flags";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


function ThumbnailGeneration({videoId}: {videoId: string}) {
  const {user} = useUser();
  const images = useQuery(api.images.getImages, {
    userId: user?.id ?? '',
    videoId,
  });

  return (
    <div className="rounded-xl flex flex-col p-4 border">
      <div className="min-w-52">
        <Usage
          featureFlag={FeatureFlag.IMAGE_GENERATION}
          title="Thumbnail Generation"
        />
      </div>
      {/* Simple horizontal scroll for images */}
      <div className="flex overflow-x-auto gap-4">
        {images?.map((image) => 
          image.url && (
            <div key={image._id} className="flex-none w-[200px] h-[100px] rounded-lg">
              <Image
                src={image.url}
                alt="Thumbnail"
                width={200}
                height={100}
                className="object-cover rounded-lg"
              />
            </div>
          )
        )}
      </div>  
      
      {/*No images generated yet*/}
      {!images?.length && (
        <div className="text-center py-8 px-4 rounded-lg mt-4 border-2 border-dashed border-gray-200">
          <p className="text-sm text-gray-500">
            No Thumbnails generated yet
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Generate thumbnails for your video to get started
          </p>
        </div>
      )}
    </div>
  );
}

export default ThumbnailGeneration;
