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
  Utensils,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import minimalAnalytics from "@/assets/minimal-analytics.jpg";

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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-aurora)', opacity: 0.1 }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enchanted Section Header */}
        <div className="text-center mb-20 space-y-6">
          <Badge className="border-2 border-secondary/50 px-6 py-3 backdrop-blur-md bg-secondary/10 shimmer">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Magical Capabilities
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block text-gradient-secondary mb-4">Your Enchanted</span>
            <span className="block text-gradient-primary">Kitchen Arsenal</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Every spell you need to orchestrate culinary excellence with effortless grace
          </p>
        </div>

        {/* Spell Selector Tabs */}
        <Tabs value={activeFeature} onValueChange={setActiveFeature} className="mb-20">
          <TabsList className="grid w-full grid-cols-3 mb-16 bg-card/50 backdrop-blur-lg p-3 rounded-3xl border-2 border-border/30">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white data-[state=active]:shadow-lg rounded-2xl transition-all duration-500 py-4 text-lg font-semibold"
              >
                <feature.icon className="w-6 h-6 mr-3" />
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
                      src={minimalAnalytics} 
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

        {/* Spell Cards Grid */}
        <div className="space-y-12">
          <h3 className="text-4xl lg:text-5xl font-bold text-center">
            <span className="text-gradient-primary">Master the </span>
            <span className="text-gradient-secondary">complete spellbook</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features_grid.map((feature, index) => (
              <div 
                key={index}
                className={`spell-card cursor-pointer ${
                  hoveredCard === feature.title ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(feature.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-110 float-animation">
                      <feature.icon className="w-8 h-8 text-primary" style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary)))' }} />
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground">
                      Active
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gradient-primary">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  <Link to={feature.title.includes('Kitchen') || feature.title.includes('Order') ? '/kitchen' : '/inventory'}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Cast Spell
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};