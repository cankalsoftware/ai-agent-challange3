import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero/>
      
      {/* Features Section */}
      <Features/>

      {/* How It Works Section */}
      <HowItWorks/>

    </div>
  );
}
