import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Calendar,
  CreditCard,
  Smartphone,
  Zap,
  TrendingUp,
  Bell,
  BarChart3,
  Users,
  Shield,
  Clock,
  Utensils
} from "lucide-react";
import { Link } from "react-router-dom";
import analyticsImage from "@/assets/restaurant-dashboard.jpg";

export const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState("analytics");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: "analytics",
      title: "Revenue Analytics",
      description: "Track sales performance and identify growth opportunities",
      icon: BarChart3,
      color: "primary",
      stats: ["Sales tracking", "Performance insights", "Growth metrics"]
    },
    {
      id: "pos",
      title: "Point of Sale",
      description: "Fast order processing with integrated payment solutions",
      icon: CreditCard,
      color: "secondary",
      stats: ["Quick billing", "Multiple payments", "Order tracking"]
    },
    {
      id: "management",
      title: "Operations",
      description: "Manage all aspects of your restaurant from one platform",
      icon: Utensils,
      color: "accent",
      stats: ["Table management", "Staff coordination", "Inventory control"]
    }
  ];

  const features_grid = [
    {
      icon: BarChart3,
      title: "Sales Reports",
      description: "Detailed analytics and performance reports",
      interactive: true
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Track customer preferences and order history",
      interactive: true
    },
    {
      icon: TrendingUp,
      title: "Growth Tracking",
      description: "Monitor business growth and key metrics",
      interactive: true
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Stay updated with order and inventory alerts",
      interactive: true
    },
    {
      icon: Clock,
      title: "Order Management",
      description: "Optimize kitchen workflow and reduce wait times",
      interactive: true
    },
    {
      icon: Shield,
      title: "Security",
      description: "Secure payment processing and data protection",
      interactive: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="border border-border/50 text-foreground px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Everything your
            <span className="block">restaurant needs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed to streamline operations and enhance customer experience
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

                  <Link to={feature.title.includes('Analytics') ? '/inventory' : feature.title.includes('POS') ? '/kitchen' : '/'}>
                    <Button className="btn-primary hover:scale-105 transition-all duration-500">
                      Explore {feature.title}
                      <feature.icon className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img 
                      src={analyticsImage} 
                      alt="Restaurant analytics dashboard preview"
                      className="w-full h-auto transform transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Floating Interactive Elements */}
                  <div className="absolute -top-4 -right-4 card-glass p-4 animate-pulse-glow">
                    <div className="text-sm font-semibold text-gradient-primary">Live Restaurant Analytics</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Features Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Complete <span className="text-muted-foreground">restaurant toolkit</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features_grid.map((feature, index) => (
              <Card 
                key={index}
                className={`border border-border/50 p-6 cursor-pointer transition-all duration-300 ${
                  hoveredCard === feature.title ? 'border-border shadow-md' : ''
                }`}
                onMouseEnter={() => setHoveredCard(feature.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <feature.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>

                  <Link to={feature.title.includes('Kitchen') || feature.title.includes('Order') ? '/kitchen' : '/inventory'}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-start hover:bg-muted/50 transition-colors"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};