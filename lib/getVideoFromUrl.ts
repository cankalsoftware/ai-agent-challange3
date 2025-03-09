export function getVideoIdFromUrl(url: string) {
  let videoId: string | null = null;

if (url.includes('youtu.be')) {
    // Long URL format
    videoId = url.split('youtu.be/')[1]?.split(/[?#]/)[0] || null;
  } else if (url.includes('v=')) {
    // Watch URL format
    videoId = url.split('v=')[1]?.split(/[?#]/)[0] || null;
  } else if (url.includes('youtube.com/shorts')) {
    // Shorts URL format
    videoId = url.split('shorts/')[1]?.split(/[?#]/)[0] || null;
  } 
  return videoId;
}

