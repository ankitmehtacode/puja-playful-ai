import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Play,
  BarChart3,
  Clock,
  Users,
  Utensils
} from "lucide-react";
import heroImage from "@/assets/restaurant-hero.jpg";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Gen Restaurant Management Platform
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Smart Restaurant
                <span className="block text-gradient-primary">
                  Management
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Revolutionary POS system with AI-powered analytics, real-time insights, 
                and seamless operations that outperform traditional restaurant management.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: "AI Analytics", color: "text-primary" },
                { icon: TrendingUp, label: "Revenue Growth", color: "text-secondary" },
                { icon: Users, label: "Customer Insights", color: "text-accent" },
                { icon: BarChart3, label: "Real-time Reports", color: "text-primary" }
              ].map((feature, index) => (
                <Card key={index} className="card-glass p-4 text-center transform transition-all duration-300 hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                  <feature.icon className={`w-8 h-8 mx-auto mb-2 ${feature.color}`} />
                  <p className="text-sm font-medium">{feature.label}</p>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Start Free Trial
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-glass group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "500+", label: "Restaurants" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered restaurant management dashboard with modern POS interface"
                className="w-full h-auto rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105"
              />
              
              {/* Floating Analytics Cards */}
              <Card className="absolute -top-4 -left-4 card-glass p-4 float-animation">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Daily Revenue</div>
                    <div className="text-lg font-bold text-gradient-primary">₹45,280</div>
                  </div>
                </div>
              </Card>

              <Card className="absolute -bottom-4 -right-4 card-glass p-4 float-animation" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  <div>
                    <div className="text-sm font-semibold">Avg. Order Time</div>
                    <div className="text-lg font-bold text-gradient-secondary">8 min</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};