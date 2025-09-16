import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Calendar,
  MapPin,
  Smartphone,
  Zap,
  TrendingUp,
  Bell,
  Camera,
  MessageCircle,
  Shield
} from "lucide-react";
import analyticsImage from "@/assets/ai-analytics-preview.jpg";

export const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState("analytics");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: "analytics",
      title: "AI Health Analytics",
      description: "Advanced machine learning algorithms analyze your pet's health patterns",
      icon: Brain,
      color: "primary",
      stats: ["Real-time analysis", "Predictive insights", "Health scoring"]
    },
    {
      id: "monitoring",
      title: "Smart Monitoring",
      description: "24/7 health monitoring with instant alerts and recommendations",
      icon: Smartphone,
      color: "secondary",
      stats: ["Continuous tracking", "Smart alerts", "Behavior analysis"]
    },
    {
      id: "booking",
      title: "Instant Vet Booking",
      description: "AI-powered vet recommendations and instant appointment booking",
      icon: Calendar,
      color: "accent",
      stats: ["Instant booking", "Best match vets", "Emergency support"]
    }
  ];

  const aiFeatures = [
    {
      icon: Camera,
      title: "Visual Health Analysis",
      description: "AI-powered photo analysis for instant health insights",
      interactive: true
    },
    {
      icon: MessageCircle,
      title: "Smart Pet Chat",
      description: "AI assistant answers all your pet care questions",
      interactive: true
    },
    {
      icon: TrendingUp,
      title: "Predictive Health",
      description: "Forecast potential health issues before they occur",
      interactive: true
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Personalized alerts for vaccines, checkups, and care",
      interactive: true
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "Find nearby emergency vets and pet services instantly",
      interactive: true
    },
    {
      icon: Shield,
      title: "Health Insurance",
      description: "AI-optimized insurance recommendations and claims",
      interactive: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Interactive Features
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Experience the
            <span className="block text-gradient-primary">Future of Pet Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI technology meets intuitive design to revolutionize how you care for your beloved pets
          </p>
        </div>

        {/* Interactive Tabs */}
        <Tabs value={activeFeature} onValueChange={setActiveFeature} className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted/50 backdrop-blur-sm p-2 rounded-2xl">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300"
              >
                <feature.icon className="w-5 h-5 mr-2" />
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r from-${feature.color} to-${feature.color}-glow`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                  </div>

                  <div className="grid gap-4">
                    {feature.stats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        <span className="font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="btn-primary">
                    Try {feature.title}
                    <feature.icon className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img 
                      src={analyticsImage} 
                      alt="AI analytics dashboard preview"
                      className="w-full h-auto transform transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Floating Interactive Elements */}
                  <div className="absolute -top-4 -right-4 card-glass p-4 animate-pulse-glow">
                    <div className="text-sm font-semibold text-gradient-primary">Live Analytics</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* AI Features Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Powered by <span className="text-gradient-primary">Advanced AI</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`card-premium cursor-pointer transition-all duration-300 ${
                  hoveredCard === feature.title ? 'scale-105 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(feature.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    {feature.interactive && (
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        Interactive
                      </Badge>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-primary hover:bg-primary/10"
                  >
                    Try Feature
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};