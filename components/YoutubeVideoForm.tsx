"use client";
import Form from "next/form";
import AnalyseButton from "./AnalyseButton";
import { analyseYoutubeVideo } from "@/actions/analyseYoutubeVideo";
import Link from "next/link";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function YoutubeVideoForm() {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const result = await analyseYoutubeVideo(formData);
    
    if (result.error) {
      toast.error(result.error, {
        className: "text-black font-medium",
      });
      return;
    }
    
    if (result.success && result.videoId) {
      router.push(`/video/${result.videoId}/analysis`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Form 
        action={handleSubmit} 
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <input 
          type="text" 
          name="url" 
          placeholder="Enter your YouTube video URL"
          className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent transition-all duration-200 text-gray-700 bg-white" 
        />
        <AnalyseButton/>
      </Form>
      <div className="mt-12 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-gray-500 text-sm">OR</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 max-w-2xl text-xl mx-auto mt-8">
          Transform your ideas with AI-powered content creator, edit them and publish them in seconds
        </p>
        <Link href="/create-content">
          <Button variant="outline" className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg
                hover:bg-blue-700 focus:ring-2 focus:outline-none 
                focus:ring-blue-500 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed transition-all 
                duration-300 font-medium">
            Create Your Own Content
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default YoutubeVideoForm;