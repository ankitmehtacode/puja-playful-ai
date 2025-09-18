import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Kitchen = () => {
  const orders = [
    { id: "ORD-001", items: ["Butter Chicken", "Naan", "Rice"], table: 12, time: "8 min", status: "preparing", priority: "high" },
    { id: "ORD-002", items: ["Caesar Salad", "Grilled Salmon"], table: 7, time: "12 min", status: "ready", priority: "medium" },
    { id: "ORD-003", items: ["Pasta Carbonara", "Garlic Bread"], table: 3, time: "5 min", status: "cooking", priority: "low" },
    { id: "ORD-004", items: ["Biryani", "Raita"], table: 15, time: "15 min", status: "preparing", priority: "high" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-accent";
      case "cooking": return "bg-secondary";
      case "preparing": return "bg-primary";
      default: return "bg-muted";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive";
      case "medium": return "bg-secondary";
      case "low": return "bg-accent";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary">Kitchen Command Center</h1>
            <p className="text-muted-foreground mt-2">Real-time order management and kitchen operations</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="btn-glass">
              ← Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Kitchen Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-premium hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">+2 from last hour</p>
            </CardContent>
          </Card>

          <Card className="card-premium hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Prep Time</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">8.5 min</div>
              <p className="text-xs text-muted-foreground">-1.2 min improved</p>
            </CardContent>
          </Card>

          <Card className="card-premium hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staff On Duty</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">8</div>
              <p className="text-xs text-muted-foreground">Full capacity</p>
            </CardContent>
          </Card>

          <Card className="card-premium hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Order Accuracy</CardTitle>
              <CheckCircle className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">98.5%</div>
              <p className="text-xs text-muted-foreground">Excellent performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Orders */}
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient-primary">Active Orders Queue</CardTitle>
            <CardDescription>Live kitchen orders with real-time status updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {orders.map((order) => (
                <div key={order.id} className="border border-border/50 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">{order.id}</Badge>
                      <Badge className={getPriorityColor(order.priority)}>
                        {order.priority} priority
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">Table {order.table}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-wrap gap-2">
                      {order.items.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-primary">{order.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Progress value={order.status === "ready" ? 100 : order.status === "cooking" ? 70 : 30} className="h-2" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover:scale-105 transition-transform">
                        Update Status
                      </Button>
                      <Button size="sm" className="btn-primary hover:scale-105 transition-transform">
                        Mark Ready
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Kitchen;