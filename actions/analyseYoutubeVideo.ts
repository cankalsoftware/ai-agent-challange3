"use server";
import {getVideoIdFromUrl} from "@/lib/getVideoFromUrl";

export async function analyseYoutubeVideo(formData: FormData) {
  try {
    const url = formData.get("url")?.toString();
    if (!url) {
      return { error: "URL is required" };
    }
    
    const videoId = getVideoIdFromUrl(url) || null;
    if (!videoId) {
      return { error: "Invalid URL" };
    }
    
    // Return success with videoId for client-side routing
    return { success: true, videoId };
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
}
