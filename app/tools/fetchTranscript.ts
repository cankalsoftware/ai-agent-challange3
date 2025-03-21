import { tool } from "ai";
import { z } from "zod";
import { getYoutubeTranscript } from "@/actions/getYoutubeTranscript";

const fetchTranscript = tool ({
    description: "Use this tool to fetch the transcript of a video",
    parameters: z.object({
        videoId: z
        .string()
        .describe("The ID of the video to fetch the transcript for"),
    }),
    execute: async ({videoId}) => {
        const transcript = await getYoutubeTranscript(videoId);
        return {
            cache: transcript.cache,
            transcript: transcript.transcript,
            
        };
    }
});

export default fetchTranscript;
