'use server'


import { api } from "@/convex/_generated/api";
import { featureFlagEvents, FeatureFlag } from "@/features/flags";
import { client } from "@/lib/schematic";
import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Innertube } from "youtubei.js";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export interface TranscriptEntry {
    text: string;
    timestamp: string;
}

const youtube = await Innertube.create({
    lang: "en",
    location: "US",
    retrieve_player: false,
});

function formatTimestamp(start_ms: number): string {
    console.log(`Formatting timestamp for ${start_ms}ms`);
    const seconds = Math.floor(start_ms % 60000 / 1000);
    const minutes = Math.floor(start_ms / 60000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

async function  fetchTranscript(videoId: string) : Promise<TranscriptEntry[]> {
    console.log(`Fetching transcript for video ID: ${videoId}`);
    try {
        console.log('Getting video info from YouTube...');
        const info = await youtube.getInfo(videoId);
        console.log('Getting transcript data...');
        const transcriptData = await info.getTranscript();
        console.log('Processing transcript segments...');
        const transcript: TranscriptEntry[] = 
            transcriptData.transcript.content?.body?.initial_segments.map(
                (segment) => ({
                    text: segment.snippet.text ?? "N/A",
                    timestamp: formatTimestamp(Number(segment.start_ms)),
                })
            ) ?? [];
        console.log(`Successfully processed ${transcript.length} transcript segments`);
        return transcript;

    } catch (error) {
        console.error("Error fetching transcript:", error);
        throw error;
    }
}

export async function getYoutubeTranscript(videoId: string) {
    console.log(`Starting getYoutubeTranscript for video ID: ${videoId}`);
    
    const user = await currentUser();
    console.log(`User authentication check for ID: ${user?.id}`);
    
    if (!user?.id) {
        console.error('User not authenticated');
        throw new Error("Unauthorized");
    }

    console.log('Checking for existing transcript in database...');
    const existingTranscript = await convex.query(
        api.transcript.getTranscriptByVideoId,
        {videoId, userId:user.id}
    );
    if (existingTranscript) {
        console.log('Found existing transcript in database');
        return {
            transcript: existingTranscript.transcript,
            cache: "Cached transcript from the database to save the tokens",
        };
    }
    
    console.log('No existing transcript found, fetching from YouTube...');
    try {
        const transcript = await fetchTranscript(videoId);
        console.log('Storing transcript in database...');
        await convex.mutation(api.transcript.storeTranscript, {
            videoId,
            userId: user.id,
            transcript,
        });

        console.log('Tracking transcription event...');
        await client.track({
            event: featureFlagEvents[FeatureFlag.TRANSCRIPTION].event,
            company:{
                id: user.id,
            },
            user:{
                id: user.id,
            }
        });

        console.log('Successfully completed transcript processing');
        return {
            transcript,
            cache: "This request is created with token and now it is saved to database for later use",
        };
    } catch (error) {
        console.error("Error fetching transcript:", error);
        return {
            transcript: [],
            cache: "Error fetching transcript. Please try again later",
        };
    }
 
}