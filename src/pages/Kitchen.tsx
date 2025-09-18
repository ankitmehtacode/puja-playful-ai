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
            <h1 className="text-3xl font-light text-foreground">Kitchen</h1>
            <p className="text-muted-foreground mt-1 font-light">Active orders and kitchen operations</p>
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              ← Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <div className="text-2xl font-semibold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">2 new in last hour</p>
            </CardContent>
          </Card>

          <Card className="p-6 border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Prep Time</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <div className="text-2xl font-semibold text-foreground">8.5 min</div>
              <p className="text-xs text-muted-foreground">Average today</p>
            </CardContent>
          </Card>

          <Card className="p-6 border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Staff</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <div className="text-2xl font-semibold text-foreground">8</div>
              <p className="text-xs text-muted-foreground">On duty</p>
            </CardContent>
          </Card>

          <Card className="p-6 border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Quality</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <div className="text-2xl font-semibold text-foreground">98%</div>
              <p className="text-xs text-muted-foreground">Order accuracy</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-medium text-foreground">Orders</CardTitle>
            <CardDescription className="text-muted-foreground">Kitchen queue and order status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border border-border/50 rounded-xl p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-muted-foreground">{order.id}</span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        order.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                        order.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      }`}>
                        {order.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        order.status === 'ready' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                        order.status === 'cooking' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                      }`}>
                        {order.status}
                      </span>
                      <span className="text-sm text-muted-foreground">Table {order.table}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-wrap gap-2">
                      {order.items.map((item, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted/50 rounded-md text-xs text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{order.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Progress value={order.status === "ready" ? 100 : order.status === "cooking" ? 70 : 30} className="h-1.5" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-8 px-3 hover:bg-muted transition-colors">
                        Update
                      </Button>
                      <Button size="sm" className="text-xs h-8 px-3 bg-foreground text-background hover:bg-foreground/90 transition-colors">
                        Ready
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