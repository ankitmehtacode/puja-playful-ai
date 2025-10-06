import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { InteractiveDemo } from "@/components/InteractiveDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InteractiveFeatures />
        <InteractiveDemo />
      </main>
    </div>
  );
};

export default Index;
