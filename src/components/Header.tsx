import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Sparkles, 
  Utensils,
  Brain,
  User,
  LogIn
} from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features", icon: Sparkles },
    { label: "AI Analytics", href: "#analytics", icon: Brain },
    { label: "Restaurant POS", href: "#pos", icon: Utensils },
    { label: "Pricing", href: "#pricing", icon: null },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-background/80 border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-24">
          {/* Enchanted Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shimmer">
                <Utensils className="w-7 h-7 lg:w-8 lg:h-8 text-white drop-shadow-lg" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full pulse-glow" 
                   style={{ background: 'var(--gradient-primary)' }} />
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ boxShadow: 'var(--glow-spell)' }} />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gradient-primary tracking-tight">
                FlowChef Pro
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5 hidden lg:block">Enchanted Kitchen Operations</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                {item.icon && (
                  <item.icon className="w-4 h-4 group-hover:text-primary transition-colors duration-200" />
                )}
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="btn-primary">
              <User className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full backdrop-blur-md bg-background/95 border-b border-border/50 shadow-xl">
            <div className="p-6 space-y-6">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-xl hover:bg-muted/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </nav>
              
              <div className="space-y-3 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="w-full btn-primary">
                  <User className="w-4 h-4 mr-2" />
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};