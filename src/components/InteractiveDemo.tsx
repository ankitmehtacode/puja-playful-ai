import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  ShoppingCart,
  AlertTriangle,
  CheckCircle,
  Zap,
  Brain,
  Utensils,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

export const InteractiveDemo = () => {
  const [activeMetric, setActiveMetric] = useState("revenue");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const restaurantMetrics = [
    {
      id: "revenue",
      icon: DollarSign,
      label: "Daily Revenue",
      value: "₹45,280",
      status: "excellent",
      change: "+18%",
      color: "text-emerald-600"
    },
    {
      id: "orders",
      icon: ShoppingCart,
      label: "Orders Today",
      value: "156",
      status: "good",
      change: "+12%",
      color: "text-sky-600"
    },
    {
      id: "customers",
      icon: Users,
      label: "Active Customers",
      value: "89",
      status: "normal",
      change: "+5%",
      color: "text-amber-600"
    },
    {
      id: "wait-time",
      icon: Clock,
      label: "Avg Wait Time",
      value: "8 min",
      status: "optimal",
      change: "-15%",
      color: "text-violet-600"
    }
  ];

  const aiInsights = [
    {
      type: "positive",
      icon: CheckCircle,
      message: "Revenue 18% above target - excellent performance during dinner rush",
      confidence: 95
    },
    {
      type: "attention",
      icon: AlertTriangle,
      message: "Table 7 waiting longer than usual - consider priority service",
      confidence: 88
    },
    {
      type: "positive",
      icon: TrendingUp,
      message: "Popular items trending: Butter Chicken (+25%) and Biryani (+30%)",
      confidence: 92
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge className="border border-border/50 text-foreground px-4 py-2">
            Live Dashboard
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Real-time restaurant
            <span className="block">performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your restaurant's key metrics and get insights to improve operations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Performance Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border border-border/50 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Performance Overview</h3>
                  <Button 
                    onClick={startAnalysis}
                    disabled={isAnalyzing}
                    variant="outline"
                  >
                    {isAnalyzing ? (
                      <>
                        <BarChart3 className="w-4 h-4 mr-2 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Refresh Data
                      </>
                    )}
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {restaurantMetrics.map((metric) => (
                    <Card
                      key={metric.id}
                      className={`p-4 cursor-pointer transition-all duration-300 border ${
                        activeMetric === metric.id
                          ? 'border-muted-foreground/30 bg-muted/20 shadow-sm'
                          : 'border-border/30 hover:border-muted-foreground/20 hover:bg-muted/10'
                      }`}
                      onClick={() => setActiveMetric(metric.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <metric.icon className={`w-5 h-5 ${metric.color}`} />
                        <Badge 
                          variant="secondary" 
                          className="bg-muted/50 text-muted-foreground border-0"
                        >
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                        <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                        <p className={`text-sm ${metric.change.startsWith('+') ? 'text-emerald-600' : metric.change.startsWith('-') ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                          {metric.change} from last week
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Update Progress */}
                {isAnalyzing && (
                  <div className="space-y-4 p-4 bg-muted/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-foreground animate-pulse" />
                      <span className="text-sm font-medium">Refreshing data...</span>
                    </div>
                    <Progress value={33} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      Loading latest performance metrics...
                    </div>
                  </div>
                )}
              </Card>

              {/* Selected Metric Detail */}
              <Card className="border border-border/50 p-6">
                <h4 className="text-lg font-semibold mb-4">
                  {restaurantMetrics.find(m => m.id === activeMetric)?.label} Trends
                </h4>
                <div className="h-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl flex items-center justify-center border border-border/30">
                  <div className="text-center space-y-2">
                    <TrendingUp className="w-8 h-8 text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">Performance Chart</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Insights Panel */}
            <div className="space-y-6">
              <Card className="border border-border/50 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-foreground" />
                  Insights
                </h3>
                
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <Card 
                      key={index} 
                      className={`p-4 border-l-4 ${
                        insight.type === 'positive' 
                          ? 'border-l-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20' 
                          : 'border-l-amber-400 bg-amber-50/50 dark:bg-amber-950/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <insight.icon className={`w-5 h-5 mt-1 ${
                          insight.type === 'positive' ? 'text-emerald-600' : 'text-amber-600'
                        }`} />
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-foreground/90">{insight.message}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">Confidence:</span>
                            <div className="flex-1 bg-muted/50 rounded-full h-1.5">
                              <div 
                                className="h-full bg-slate-400 rounded-full transition-all duration-1000"
                                style={{ width: `${insight.confidence}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">{insight.confidence}%</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="border border-border/50 p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/kitchen" className="block">
                    <Button variant="outline" size="sm" className="w-full justify-start transition-colors">
                      <Utensils className="w-4 h-4 mr-2" />
                      Kitchen
                    </Button>
                  </Link>
                  <Link to="/inventory" className="block">
                    <Button variant="outline" size="sm" className="w-full justify-start transition-colors">
                      <Users className="w-4 h-4 mr-2" />
                      Inventory
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="w-full justify-start transition-colors">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};