'use client';

import YoutubeVideoForm from "./YoutubeVideoForm";


import AgentPulse from "./AgentPulse";

export default function Hero() {

    return (
        <section className="py 20 bg-gradient-to-b from-white to-gray-50 text-white">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="flex flex-col items-center gap-10 text-center mb-16">
            <AgentPulse size="large" color="blue" />
            
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet your new {""} 
              <span className="bg-gradient-to-r  from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Mentor In AI
                </span  >
              </h1>
              <p className="text-gray-600 mb-8 max-w-2xl text-xl mx-auto">
                Develop your skills with our AI-powered Mentor.
              </p>
           {/* Youtube Video Form */}
            <YoutubeVideoForm />
            
          </div>
        </div>
      </section>
    )   
}
