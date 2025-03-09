"use server";
import {getVideoIdFromUrl} from "@/lib/getVideoFromUrl";
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) {
    throw new Error("URL is required");
  }
  //const videoId = getVideoIdFromUrl(url);
  const videoId = getVideoIdFromUrl(url) || null;
  if (!videoId) {
    throw new Error("Invalid URL");
  }
  redirect(`/video/${videoId}/analysis`);
}

 