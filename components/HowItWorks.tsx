'use client'

import React from 'react';
import { 
    MessageSquare,
    Sparkles, 
    Video} from "lucide-react";

const steps = [
  {
    title: "1 Connect Your Content",
    description: "Share your YouTube video URL and let your AI agent transcribe it.",
    icon: MessageSquare,
    iconBg: "bg-blue-200",
    iconColor: "text-blue-500",
  },
  {
    title: "2 AI Agent Analysis",
    description: "Let our AI agent analyze your content and create a detailed summary.",
    icon: Video,
    iconBg: "bg-blue-200",
    iconColor: "text-blue-500",
  },
  {
    title: "3 Generate Content",
    description: "Let our AI agent generate a detailed summary of your content.",
    icon: Sparkles,
    iconBg: "bg-blue-200",
    iconColor: "text-blue-500",
  },
];

export default function HowItWorks() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl text-gray-900 font-bold text-center mb-12">
            Meet your AI Agent in 3 simple steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-xl border from-blue-600 to-blue-400 bg-clip-text text-transparent hover:border-blue-500 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full flex bg-gradient-to-b from-blue-600 to-blue-400 items-center justify-center mx-auto mb-4">
                    <Icon className={`w-6 h-6 text-white ${step.iconColor}`} />
                  </div>
                  <h3 className="text-xl text-gray-900 font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}
