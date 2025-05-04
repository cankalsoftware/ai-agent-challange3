'use client';

import React from 'react';
import { 
      Brain,
      Image as ImageIcon,
      MessageSquare,
      Sparkles,
      Video,
    } from "lucide-react";

    const features = [
      {
        title: "AI Analysis",
        description:
          "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
        icon: Brain,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        title: "Smart Transcription",
        description:
          "Get accurate transcriptions of your videos. Perfect for creating subtitles, blog posts, or repurposing content.",
        icon: MessageSquare,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        title: "Thumbnail Generation",
        description:
          "Generate eye-catching thumbnails using AI. Boost your click-through rates with compelling visuals.",
        icon: ImageIcon,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
      },
      {
        title: "Title Generation",
        description:
          "Create attention-grabbing, SEO-optimized titles for your videos using AI. Maximize views with titles that resonate with your audience.",
        icon: MessageSquare,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
      },
      {
        title: "Shot Script",
        description:
          "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips from successful content.",
        icon: Video,
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
      },
      {
        title: "Discuss with Your AI Agent",
        description:
          "Engage in deep conversations about your content strategy, brainstorm ideas, and unlock new creative possibilities with your AI agent companion.",
        icon: Sparkles,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
      },
    ];

export default function Features() {

    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Powerful Features for Content Creators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* features */}
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 text-gray-900"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
}
