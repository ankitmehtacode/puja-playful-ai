import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package, TrendingDown, AlertTriangle, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Inventory = () => {
  const inventory = [
    { name: "Basmati Rice", category: "Grains", current: 45, minimum: 20, unit: "kg", status: "good", cost: "₹2,250" },
    { name: "Chicken Breast", category: "Meat", current: 8, minimum: 15, unit: "kg", status: "low", cost: "₹1,800" },
    { name: "Tomatoes", category: "Vegetables", current: 25, minimum: 10, unit: "kg", status: "good", cost: "₹750" },
    { name: "Olive Oil", category: "Oils", current: 3, minimum: 5, unit: "L", status: "critical", cost: "₹1,200" },
    { name: "Paneer", category: "Dairy", current: 12, minimum: 8, unit: "kg", status: "good", cost: "₹2,400" },
    { name: "Onions", category: "Vegetables", current: 6, minimum: 15, unit: "kg", status: "low", cost: "₹420" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "bg-accent text-accent-foreground";
      case "low": return "bg-secondary text-secondary-foreground";
      case "critical": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "good": return "bg-accent";
      case "low": return "bg-secondary";
      case "critical": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const calculatePercentage = (current: number, minimum: number) => {
    return Math.min((current / (minimum * 2)) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Inventory</h1>
            <p className="text-muted-foreground mt-2">Track stock levels and manage orders</p>
          </div>
          <div className="flex gap-3">
            <Link to="/">
              <Button variant="outline" className="btn-glass">
                ← Back to Dashboard
              </Button>
            </Link>
            <Button className="btn-primary hover:scale-105 transition-transform">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* Inventory Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Items</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+8 this week</p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Need reorder</p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.4L</div>
              <p className="text-xs text-muted-foreground">Current stock</p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 hover:border-border transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">Stock levels</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="border border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search items..." 
                  className="pl-10 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <Button variant="outline">
                Category
              </Button>
              <Button variant="outline">
                Stock Level
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Inventory List */}
        <Card className="border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Stock Status</CardTitle>
            <CardDescription>Current inventory levels and reorder points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {inventory.map((item, index) => (
                <div key={index} className="border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <Badge className={getStatusColor(item.status)} variant="secondary">
                        {item.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{item.current} {item.unit}</div>
                      <div className="text-sm text-muted-foreground">Min: {item.minimum} {item.unit}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Stock Level</span>
                      <span className="font-medium">{item.cost}</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 rounded-full ${getProgressColor(item.status)}`}
                        style={{ width: `${calculatePercentage(item.current, item.minimum)}%` }}
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" className="hover:scale-105 transition-transform flex-1">
                        Update Stock
                      </Button>
                      <Button 
                        size="sm" 
                        className={`${item.status === 'critical' || item.status === 'low' ? 'btn-primary' : 'btn-secondary'} hover:scale-105 transition-transform flex-1`}
                      >
                        {item.status === 'critical' || item.status === 'low' ? 'Reorder Now' : 'Add to Cart'}
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

export default Inventory;