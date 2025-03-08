'use client';

import React from 'react';
import { 
    Brain, 
    PenTool, 
    Image as ImageIcon,
    MessageSquare,
    Sparkles, 
    Video} from "lucide-react";

    const features = [
        {
          title: "Content Generation",
          description: "Generate high-quality content for your blog, website, or social media.",
          icon: Brain,
          iconBg: "bg-blue-200",
          iconColor: "text-blue-500",
        },
        {
          title: "Smart Transcription",
          description: "Generate high-quality content for your blog, website, or social media.",
          icon: PenTool,
          iconBg: "bg-blue-200",
          iconColor: "text-blue-500",
        },
        {
          title: "Thanmpnail Creation",
          description: "Generate high-quality content for your blog, website, or social media.",
          icon: ImageIcon,
          iconBg: "bg-blue-200",
          iconColor: "text-blue-500",
        },
      ];

export default function Features() {

    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl text-gray-900 font-bold text-center mb-12">
            Powerful Features for Content creators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-blue-500 from-blue-600 to-blue-400 bg-clip-text text-transparent hover:border-blue-500 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl text-gray-900 font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
}
