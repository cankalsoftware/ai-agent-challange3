"use client";

import{useFormStatus} from "react-dom";

function AnalyseButton  (){
  const {pending} = useFormStatus();
  return <button 
  type="submit" 
  disabled={pending} 
  className="bg-blue-600 text-white px-6 py-2 rounded-lg
   hover:bg-blue-700 focus:ring-2 focus:outline-none 
   focus:ring-blue-500 focus:ring-offset-2
   disabled:opacity-50 disabled:cursor-not-allowed transition-all 
   duration-300 font-medium">


    {pending ? "Analyzing..." : "Analyse"}

  </button>;
};

export default AnalyseButton;