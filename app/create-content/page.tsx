'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FeatureFlag } from '@/features/flags';
import Usage from '@/components/Usage';

export default function CreateContent() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="container mx-auto p-4 md:p-0">


      <h1 className="text-2xl font-bold mb-4 my-8">Create Your Content</h1>
      <div className='flex flex-col gap-4 p-4 border border-gray-200 rounded-xl'>
              <Usage
              featureFlag = {FeatureFlag.CREATE_CONTENT}
              title = "Create Content"
              />
        </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Speech to Text Content Creator</h2>
          <p className="text-gray-600 mb-6">
            Record your voice and convert it to text content. Click the button below to start recording.
          </p>
          <Button 
            onClick={() => setIsRecording(!isRecording)}
            className={`w-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Button>
        </div>
      </div>
    </div>
  );
} 