import AgentPulse from "@/components/AgentPulse";
import Image from "next/image";
import { 
  Brain, 
  PenTool, 
  Image as ImageIcon,
  MessageSquare,
  Sparkles, 
  Video} from "lucide-react";

import { User } from "@clerk/nextjs/server";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";

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

const steps = [
  {
    title: "1 Connect Your Content",
    description: "Share your YouTube video URL and let your AI agent transcribe it.",
    icon: Sparkles,
    iconBg: "bg-blue-200",
    iconColor: "text-blue-500",
  },
  {
    title: "2 AI Agent Analysis",
    description: "Let our AI agent analyze your content and create a detailed summary.",
    icon: Sparkles,
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py 20 bg-gradient-to-b from-white to-gray-50 text-white">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="flex flex-col items-center gap-10 text-center mb-16">
            <AgentPulse size="large" color="blue" />
            
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet your new {""} 
              <span className="bg-gradient-to-r  from-blue-600 to-blue-400 bg-clip-text text-transparent">
                AI assistant
                </span  >
              </h1>
              <p className="text-gray-600 mb-8 max-w-2xl text-xl mx-auto">
                Transform your ideas into reality with our AI-powered platform.
              </p>
           {/* Youtube Video Form */}
            <YoutubeVideoForm />
            
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content creators
            </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl border border-blue-500 
               from-blue-600 to-blue-400 bg-clip-text text-transparent
              hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />

                </div>
                <h3 className="text-xl text-gray-400900 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                </div>
                )
          })}

        </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet your AI Agent in 3 simple steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-xl border
                from-blue-600 to-blue-400 bg-clip-text text-transparent
                hover:border-blue-500 transition-all duration-300">
                
                  <div className="w-12 h-12 rounded-full flex bg-gradient-to-b
                   from-blue-600 to-blue-400 items-center justify-center mx-auto mb-4">
                    <Icon className={`w-6 h-6 text-white ${step.iconColor}`} />
                  </div>
                
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                
                  <p className="text-gray-600">{step.description}</p>
                
                </div>
              )
            })}
          </div>
          

        </div>
      </section>  



      {/* Footer Section */}

        <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get Started with your AI Agent
            </h2>
            <p className="text-white text-center mb-8 max-w-2xl text-xl mx-auto">
              Transform your ideas into reality with our AI-powered platform.
            </p>
 
          </div>
        </section>
    </div>
  );
}
