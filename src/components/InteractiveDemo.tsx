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
      color: "text-green-500"
    },
    {
      id: "orders",
      icon: ShoppingCart,
      label: "Orders Today",
      value: "156",
      status: "good",
      change: "+12%",
      color: "text-blue-500"
    },
    {
      id: "customers",
      icon: Users,
      label: "Active Customers",
      value: "89",
      status: "normal",
      change: "+5%",
      color: "text-orange-500"
    },
    {
      id: "wait-time",
      icon: Clock,
      label: "Avg Wait Time",
      value: "8 min",
      status: "optimal",
      change: "-15%",
      color: "text-purple-500"
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
          <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 px-4 py-2">
            <Brain className="w-4 h-4 mr-2" />
            Live AI Demo
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            See Restaurant AI in
            <span className="block text-gradient-primary">Real Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our AI analyzes restaurant data in real-time and provides actionable business insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Health Metrics Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-premium p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Restaurant Analytics Dashboard</h3>
                  <Button 
                    onClick={startAnalysis}
                    disabled={isAnalyzing}
                    className="btn-primary"
                  >
                    {isAnalyzing ? (
                      <>
                        <Zap className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        Run AI Analysis
                      </>
                    )}
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {restaurantMetrics.map((metric) => (
                    <Card
                      key={metric.id}
                      className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                        activeMetric === metric.id
                          ? 'border-primary bg-primary/5 shadow-lg scale-105'
                          : 'border-border hover:border-primary/50 hover:shadow-md'
                      }`}
                      onClick={() => setActiveMetric(metric.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <metric.icon className={`w-6 h-6 ${metric.color}`} />
                        <Badge variant={metric.status === 'excellent' || metric.status === 'good' || metric.status === 'optimal' ? 'default' : 'secondary'}>
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : metric.change.startsWith('-') ? 'text-green-600' : 'text-muted-foreground'}`}>
                          {metric.change} from last week
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Analysis Progress */}
                {isAnalyzing && (
                  <div className="space-y-4 p-4 bg-muted/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-primary animate-pulse" />
                      <span className="text-sm font-medium">AI Analysis in Progress...</span>
                    </div>
                    <Progress value={33} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      Processing sales patterns and generating business insights...
                    </div>
                  </div>
                )}
              </Card>

              {/* Selected Metric Detail */}
              <Card className="card-premium p-6">
                <h4 className="text-lg font-semibold mb-4">
                  {restaurantMetrics.find(m => m.id === activeMetric)?.label} Trends
                </h4>
                <div className="h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto" />
                    <p className="text-sm text-muted-foreground">Interactive Chart Visualization</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* AI Insights Panel */}
            <div className="space-y-6">
              <Card className="card-premium p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Insights
                </h3>
                
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <Card 
                      key={index} 
                      className={`p-4 border-l-4 ${
                        insight.type === 'positive' 
                          ? 'border-l-green-500 bg-green-50 dark:bg-green-950/20' 
                          : 'border-l-orange-500 bg-orange-50 dark:bg-orange-950/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <insight.icon className={`w-5 h-5 mt-1 ${
                          insight.type === 'positive' ? 'text-green-600' : 'text-orange-600'
                        }`} />
                        <div className="flex-1 space-y-2">
                          <p className="text-sm">{insight.message}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">Confidence:</span>
                            <div className="flex-1 bg-background rounded-full h-1.5">
                              <div 
                                className="h-full bg-primary rounded-full transition-all duration-1000"
                                style={{ width: `${insight.confidence}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium">{insight.confidence}%</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="card-premium p-6">
                <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
                <div className="space-y-3">
                  <Link to="/kitchen" className="block">
                    <Button variant="outline" size="sm" className="w-full justify-start hover:scale-105 transition-all duration-500">
                      <Utensils className="w-4 h-4 mr-2" />
                      Kitchen Operations
                    </Button>
                  </Link>
                  <Link to="/inventory" className="block">
                    <Button variant="outline" size="sm" className="w-full justify-start hover:scale-105 transition-all duration-500">
                      <Users className="w-4 h-4 mr-2" />
                      Smart Inventory
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="w-full justify-start hover:scale-105 transition-all duration-500">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics Hub
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