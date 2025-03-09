'use client'

import { FeatureFlag } from "@/features/flags"
import { useSchematicEntitlement } from "@schematichq/schematic-react"
import { useState } from "react";
import Usage from "./Usage";

interface TranscriptEntry {
    text: string;
    timestemp: string;
}

function Transcription({videoId}: {videoId: string}) {
    const [transcript] = useState<{
        transcript: TranscriptEntry[];
        cache: string;
    } | null>(null);

    // quick fix
    console.log(videoId);

    const {featureUsageExceeded} = useSchematicEntitlement(
        FeatureFlag.TRANSCRIPTION,
    )
    
    return (
        <div className='border p-4 pb-0 rounded-xl gap-4 flex flex-col'>
            <Usage
                featureFlag={FeatureFlag.TRANSCRIPTION}
                title="Transcription"
            />

            {/* Transcription exceeded */}
            {!featureUsageExceeded ? (
                <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto rounded-md p-4">
                    {transcript ? (
                        transcript.transcript.map((entry: TranscriptEntry, index: number) => (
                            <div key={index} className="flex gap-2">
                                <span className="text-sm text-gray-500 min-w-[50px]">{entry.timestemp}</span>
                                <p className="text-sm text-gray-800">{entry.text}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-sm text-gray-500">
                            No transcription available for this video.
                        </p>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default Transcription