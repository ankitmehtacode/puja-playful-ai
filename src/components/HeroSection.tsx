import { useState } from "react";
import { ShapeBlur } from "@/components/ui/shape-blur";
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
import minimalDashboard from "@/assets/minimal-dashboard.jpg";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enchanted Nebula Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-nebula)' }}>
        <div className="absolute inset-0" style={{ 
          background: 'var(--gradient-hero)',
          animation: 'nebula-drift 15s ease-in-out infinite',
          backgroundSize: '200% 200%'
        }} />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-float" 
               style={{ background: 'radial-gradient(circle, hsl(300 90% 65% / 0.6), transparent)' }} />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl animate-float" 
               style={{ 
                 background: 'radial-gradient(circle, hsl(180 100% 55% / 0.6), transparent)',
                 animationDelay: '1.5s' 
               }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-float" 
               style={{ 
                 background: 'radial-gradient(circle, hsl(300 90% 65% / 0.5), hsl(180 100% 55% / 0.3), transparent)',
                 animationDelay: '3s' 
               }} />
        </div>
        
        {/* Shape Blur Effect */}
        <div className="absolute inset-0 opacity-30">
          <ShapeBlur 
            shapeSize={1.5}
            roundness={0.6}
            borderSize={0.08}
            circleSize={0.4}
            circleEdge={0.8}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enchanted Content */}
          <div className="space-y-10 animate-slide-up">
            <Badge className="border-2 border-primary/50 px-6 py-3 backdrop-blur-md bg-primary/10 shimmer">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              The Enchanted Kitchen
            </Badge>

            {/* Magical Headline */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="block text-gradient-primary mb-4" style={{ 
                  textShadow: 'var(--glow-primary)',
                  animation: 'pulse-glow 4s ease-in-out infinite'
                }}>
                  FlowChef Pro
                </span>
                <span className="block text-4xl lg:text-5xl text-gradient-secondary font-light" 
                      style={{ textShadow: 'var(--glow-secondary)' }}>
                  Where Magic Meets Mastery
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                Step into the future of culinary operations. Experience real-time orchestration that feels like pure enchantment.
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

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Button 
                size="lg" 
                className="btn-primary"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Begin Your Journey
                <ArrowRight className={`w-6 h-6 ml-3 transition-transform duration-500 ${isHovered ? 'translate-x-2' : ''}`} />
              </Button>
              
              <Button 
                size="lg" 
                className="btn-glass"
              >
                <Play className="w-6 h-6 mr-3" />
                See the Magic
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
                src={minimalDashboard} 
                alt="AI-powered restaurant management dashboard with modern POS interface"
                className="w-full h-auto rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105"
              />
              
              <div className="absolute -top-6 -left-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Today's Orders</div>
                    <div className="text-lg font-semibold text-foreground">127</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Average Time</div>
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