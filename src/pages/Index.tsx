import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

// Lazy load below-the-fold components
const FeaturesSection = lazy(() => import("@/components/FeaturesSection").then(m => ({ default: m.FeaturesSection })));
const InteractiveFeatures = lazy(() => import("@/components/InteractiveFeatures").then(m => ({ default: m.InteractiveFeatures })));
const InteractiveDemo = lazy(() => import("@/components/InteractiveDemo").then(m => ({ default: m.InteractiveDemo })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-32" />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<div className="h-32" />}>
          <InteractiveFeatures />
        </Suspense>
        <Suspense fallback={<div className="h-32" />}>
          <InteractiveDemo />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
