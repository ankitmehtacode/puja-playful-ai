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
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted/50 text-sm text-muted-foreground mb-6">
              Restaurant Management
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light leading-tight text-foreground">
                Kitchen
                <span className="block font-medium">
                  Operations
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Everything you need to run your kitchen smoothly. 
                Orders, inventory, and team coordination in one place.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Clock, label: "Orders", color: "text-foreground" },
                { icon: Users, label: "Staff", color: "text-foreground" },
                { icon: BarChart3, label: "Reports", color: "text-foreground" },
                { icon: Utensils, label: "Menu", color: "text-foreground" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors" style={{ animationDelay: `${index * 0.1}s` }}>
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <p className="text-sm font-medium">{feature.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-2xl px-8 py-4 font-medium"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-muted-foreground/20 hover:bg-muted/30 rounded-2xl px-8 py-4 font-medium"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex gap-8 pt-6">
              {[
                { value: "200+", label: "Restaurants" },
                { value: "24/7", label: "Support" },
                { value: "99%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl font-medium text-foreground">{stat.value}</div>
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
              
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Today's Orders</div>
                    <div className="text-lg font-semibold text-foreground">127</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Average Time</div>
                    <div className="text-lg font-semibold text-foreground">8 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};