import Hero from "@/components/app_page/Hero";
import Features from "@/components/app_page/Features";
import HowItWorks from "@/components/app_page/HowItWorks";

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
