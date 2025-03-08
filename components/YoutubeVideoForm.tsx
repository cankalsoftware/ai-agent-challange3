import Form from "next/form";
import AnalyseButton from "./AnalyseButton";
import { analyseYoutubeVideo } from "@/actions/analyseYoutubeVideo";

function YoutubeVideoForm() {
  return (
  <div className="w-full max-w-md mx-auto">
    <Form 
    action={analyseYoutubeVideo} 
    className="flex flex-col sm:flex-row items-center gap-2">

        <input type="text" name="url" placeholder="Enter your YouTube video URL"
            className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent transition-all duration-200 text-gray-700 bg-white" 
        />
    
        <AnalyseButton/>
    </Form>
  </div>
  );
}

export default YoutubeVideoForm;