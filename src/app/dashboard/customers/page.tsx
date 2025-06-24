"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ShoppingCart, DollarSign, Repeat, Users, TrendingUp, Clock, Package } from "lucide-react"

// POS Analytics Metrics - focused on store owner insights
const posMetrics = [
  {
    title: "Total Revenue",
    value: "$12,540",
    change: "+18.3%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Total Transactions",
    value: "186",
    change: "+12.7%",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Average Transaction",
    value: "$67.42",
    change: "+5.1%",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Unique Customers",
    value: "142",
    change: "+8.9%",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Repeat Customers",
    value: "48",
    change: "+15.2%",
    icon: Repeat,
    color: "text-orange-600",
  },
  {
    title: "Customer Lifetime Value",
    value: "$88.31",
    change: "+7.4%",
    icon: Package,
    color: "text-indigo-600",
  },
  {
    title: "Avg Items per Transaction",
    value: "2.4",
    change: "+0.3",
    icon: Package,
    color: "text-teal-600",
  },
  {
    title: "Peak Hour Revenue",
    value: "$1,840",
    change: "6-7 PM",
    icon: Clock,
    color: "text-amber-600",
  },
]

// Customer Demographics - Race breakdown of actual purchasers
const customerRaceData = [
  { name: "White", value: 52, percentage: 36.6, fill: "#ef4444" },
  { name: "Hispanic/Latino", value: 38, percentage: 26.8, fill: "#f97316" },
  { name: "Black/African American", value: 28, percentage: 19.7, fill: "#eab308" },
  { name: "Asian", value: 18, percentage: 12.7, fill: "#22c55e" },
  { name: "Other/Mixed", value: 6, percentage: 4.2, fill: "#3b82f6" },
]

// Customer Demographics - Age breakdown of actual purchasers
const customerAgeData = [
  { name: "18-25", value: 28, percentage: 19.7, avgSpend: 52.3, fill: "#ef4444" },
  { name: "26-35", value: 52, percentage: 36.6, avgSpend: 74.8, fill: "#f97316" },
  { name: "36-45", value: 38, percentage: 26.8, avgSpend: 68.9, fill: "#eab308" },
  { name: "46-55", value: 18, percentage: 12.7, avgSpend: 82.4, fill: "#22c55e" },
  { name: "56+", value: 6, percentage: 4.2, avgSpend: 95.6, fill: "#3b82f6" },
]

// Customer Demographics - Gender breakdown
const customerGenderData = [
  { name: "Female", value: 78, percentage: 54.9, avgSpend: 71.2, fill: "#ec4899" },
  { name: "Male", value: 58, percentage: 40.8, avgSpend: 62.8, fill: "#3b82f6" },
  { name: "Non-binary/Other", value: 6, percentage: 4.2, avgSpend: 68.5, fill: "#6b7280" },
]

// Hourly Sales Performance
const hourlySalesData = [
  { time: "09:00", revenue: 280, transactions: 4, customers: 4, fill: "#3b82f6" },
  { time: "10:00", revenue: 420, transactions: 6, customers: 6, fill: "#3b82f6" },
  { time: "11:00", revenue: 680, transactions: 9, customers: 8, fill: "#3b82f6" },
  { time: "12:00", revenue: 1240, transactions: 18, customers: 16, fill: "#3b82f6" },
  { time: "13:00", revenue: 980, transactions: 14, customers: 13, fill: "#3b82f6" },
  { time: "14:00", revenue: 1380, transactions: 19, customers: 17, fill: "#3b82f6" },
  { time: "15:00", revenue: 1520, transactions: 22, customers: 19, fill: "#3b82f6" },
  { time: "16:00", revenue: 1680, transactions: 24, customers: 21, fill: "#3b82f6" },
  { time: "17:00", revenue: 1720, transactions: 26, customers: 22, fill: "#3b82f6" },
  { time: "18:00", revenue: 1840, transactions: 28, customers: 24, fill: "#3b82f6" },
  { time: "19:00", revenue: 1580, transactions: 23, customers: 20, fill: "#3b82f6" },
  { time: "20:00", revenue: 1190, transactions: 17, customers: 15, fill: "#3b82f6" },
]

// Transaction Size Distribution
const transactionSizeData = [
  { range: "$0-25", count: 28, percentage: 15.1, fill: "#ef4444" },
  { range: "$26-50", count: 45, percentage: 24.2, fill: "#f97316" },
  { range: "$51-75", count: 52, percentage: 28.0, fill: "#eab308" },
  { range: "$76-100", count: 38, percentage: 20.4, fill: "#22c55e" },
  { range: "$101-150", count: 18, percentage: 9.7, fill: "#3b82f6" },
  { range: "$150+", count: 5, percentage: 2.7, fill: "#8b5cf6" },
]

// Product Category Performance
const categoryPerformanceData = [
  { category: "Apparel", revenue: 4280, transactions: 68, avgTransaction: 62.94, fill: "#ef4444" },
  { category: "Accessories", revenue: 2840, transactions: 52, avgTransaction: 54.62, fill: "#f97316" },
  { category: "Footwear", revenue: 3120, transactions: 38, avgTransaction: 82.11, fill: "#eab308" },
  { category: "Electronics", revenue: 1680, transactions: 18, avgTransaction: 93.33, fill: "#22c55e" },
  { category: "Home & Lifestyle", revenue: 620, transactions: 10, avgTransaction: 62.0, fill: "#3b82f6" },
]

// Customer Segmentation by Value
const customerSegmentData = [
  { segment: "High Value", count: 18, avgSpend: 145.6, totalRevenue: 2621, fill: "#ef4444" },
  { segment: "Medium Value", count: 52, avgSpend: 78.4, totalRevenue: 4077, fill: "#f97316" },
  { segment: "Low Value", count: 72, avgSpend: 42.8, totalRevenue: 3082, fill: "#eab308" },
]

// Payment Method Distribution
const paymentMethodData = [
  { method: "Credit Card", count: 89, percentage: 47.8, fill: "#3b82f6" },
  { method: "Debit Card", count: 52, percentage: 28.0, fill: "#10b981" },
  { method: "Mobile Pay", count: 28, percentage: 15.1, fill: "#f59e0b" },
  { method: "Cash", count: 17, percentage: 9.1, fill: "#6b7280" },
]

// Chart configurations
const raceConfig = {
  White: { label: "White", color: "#ef4444" },
  "Hispanic/Latino": { label: "Hispanic/Latino", color: "#f97316" },
  "Black/African American": { label: "Black/African American", color: "#eab308" },
  Asian: { label: "Asian", color: "#22c55e" },
  "Other/Mixed": { label: "Other/Mixed", color: "#3b82f6" },
}

const ageConfig = {
  "18-25": { label: "18-25", color: "#ef4444" },
  "26-35": { label: "26-35", color: "#f97316" },
  "36-45": { label: "36-45", color: "#eab308" },
  "46-55": { label: "46-55", color: "#22c55e" },
  "56+": { label: "56+", color: "#3b82f6" },
}

const genderConfig = {
  Female: { label: "Female", color: "#ec4899" },
  Male: { label: "Male", color: "#3b82f6" },
  "Non-binary/Other": { label: "Non-binary/Other", color: "#6b7280" },
}

const salesConfig = {
  revenue: { label: "Revenue", color: "#10b981" },
  transactions: { label: "Transactions", color: "#3b82f6" },
}

const categoryConfig = {
  revenue: { label: "Revenue", color: "#ef4444" },
}

const segmentConfig = {
  totalRevenue: { label: "Total Revenue", color: "#ef4444" },
}

export default function CustomersPage() {
  const timeRange = "Oct 15, 2023 10:00 - Oct 22, 2023 19:07 (UTC)"
  const totalCustomers = customerRaceData.reduce((sum, item) => sum + item.value, 0)
  const totalRevenue = hourlySalesData.reduce((sum, item) => sum + item.revenue, 0)
  const totalTransactions = hourlySalesData.reduce((sum, item) => sum + item.transactions, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer & POS Analytics</h1>
        <p className="text-muted-foreground">
          Comprehensive insights into your customer demographics, purchase behavior, and sales performance.
        </p>
      </div>

      {/* POS Performance Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p
                className={`text-xs ${
                  metric.change.startsWith("+") || metric.change.startsWith("-")
                    ? metric.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                    : "text-muted-foreground"
                }`}
              >
                {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Row 1: Customer Demographics - Race and Age */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Race Demographics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Customer Demographics by Race</CardTitle>
            <CardDescription>Racial breakdown of your customer base - {timeRange}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative">
              <ChartContainer config={raceConfig} className="aspect-square min-h-[300px] max-h-[300px]">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => [
                          `${value} customers (${((value / totalCustomers) * 100).toFixed(1)}%)`,
                          name,
                        ]}
                        labelFormatter={() => ""}
                      />
                    }
                  />
                  <Pie
                    data={customerRaceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {customerRaceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{totalCustomers}</div>
                  <div className="text-sm text-muted-foreground">Total Customers</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-6 w-full">
              {customerRaceData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold">{item.value}</span>
                    <span className="text-xs text-muted-foreground ml-1">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Age Demographics with Spending */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Customer Demographics by Age</CardTitle>
            <CardDescription>Age breakdown with average spending patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={ageConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={customerAgeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, props) => [
                          `${value} customers`,
                          `Age ${props.payload.name} • Avg: $${props.payload.avgSpend}`,
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-5 gap-2 mt-4">
              {customerAgeData.map((item) => (
                <div key={item.name} className="text-center p-2 bg-accent rounded">
                  <div className="text-sm font-bold">{item.name}</div>
                  <div className="text-xs text-muted-foreground">${item.avgSpend}</div>
                  <div className="text-xs text-muted-foreground">avg spend</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Gender Demographics and Transaction Sizes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Gender Demographics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Customer Demographics by Gender</CardTitle>
            <CardDescription>Gender breakdown with spending behavior</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative">
              <ChartContainer config={genderConfig} className="aspect-square min-h-[250px] max-h-[250px]">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, props) => [
                          `${value} customers • Avg: $${props.payload.avgSpend}`,
                          name,
                        ]}
                        labelFormatter={() => ""}
                      />
                    }
                  />
                  <Pie
                    data={customerGenderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {customerGenderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">142</div>
                  <div className="text-xs text-muted-foreground">Customers</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-4 w-full">
              {customerGenderData.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-2 bg-accent rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{item.value} customers</div>
                    <div className="text-xs text-muted-foreground">Avg: ${item.avgSpend}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transaction Size Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Transaction Size Distribution</CardTitle>
            <CardDescription>How much customers typically spend per visit</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={ageConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={transactionSizeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, props) => [
                          `${value} transactions (${props.payload.percentage}%)`,
                          `Range: ${props.payload.range}`,
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-2 bg-accent rounded">
                <div className="text-lg font-bold">$67.42</div>
                <div className="text-xs text-muted-foreground">Avg Transaction</div>
              </div>
              <div className="text-center p-2 bg-accent rounded">
                <div className="text-lg font-bold">$51-75</div>
                <div className="text-xs text-muted-foreground">Most Common</div>
              </div>
              <div className="text-center p-2 bg-accent rounded">
                <div className="text-lg font-bold">28%</div>
                <div className="text-xs text-muted-foreground">In Sweet Spot</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 3: Hourly Sales Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Hourly Sales Performance</CardTitle>
          <CardDescription>Revenue and transaction patterns throughout the day - {timeRange}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={salesConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlySalesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="#10b981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="transactions" fill="#3b82f6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">6-7 PM</div>
              <div className="text-sm text-muted-foreground">Peak Sales Hour</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">$1,840</div>
              <div className="text-sm text-muted-foreground">Peak Hour Revenue</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">28</div>
              <div className="text-sm text-muted-foreground">Peak Transactions</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">$65.71</div>
              <div className="text-sm text-muted-foreground">Peak Hour Avg</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Row 4: Product Categories and Customer Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Product Category Performance</CardTitle>
            <CardDescription>Revenue breakdown by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={categoryConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <XAxis
                    dataKey="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, props) => [
                          `$${value.toLocaleString()} • ${props.payload.transactions} transactions`,
                          `Avg: $${props.payload.avgTransaction.toFixed(2)}`,
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="revenue" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryPerformanceData.slice(0, 4).map((category) => (
                <div key={category.category} className="text-center p-2 bg-accent rounded text-xs">
                  <div className="font-medium">{category.category}</div>
                  <div className="text-muted-foreground">${category.avgTransaction.toFixed(0)} avg</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Value Segments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Customer Value Segments</CardTitle>
            <CardDescription>Customer segmentation by spending behavior</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={segmentConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={customerSegmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="segment" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, props) => [
                          `$${value.toLocaleString()} total revenue`,
                          `${props.payload.count} customers • Avg: $${props.payload.avgSpend}`,
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="totalRevenue" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-3 gap-2 mt-4">
              {customerSegmentData.map((segment) => (
                <div key={segment.segment} className="text-center p-2 bg-accent rounded">
                  <div className="text-sm font-bold">{segment.segment}</div>
                  <div className="text-xs text-muted-foreground">{segment.count} customers</div>
                  <div className="text-xs text-muted-foreground">${segment.avgSpend} avg</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Business Insights Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Insights & Business Recommendations</CardTitle>
          <CardDescription>Key takeaways from your customer and sales analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">💰 Revenue Drivers</h3>
              <p className="text-sm text-green-700">
                Ages 26-35 are your highest value customers ($74.80 avg). Peak sales 6-7 PM. Apparel drives 34% of
                revenue.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">👥 Customer Profile</h3>
              <p className="text-sm text-blue-700">
                55% female customers with higher avg spend ($71.20). Hispanic/Latino customers represent 27% of your
                base.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">📈 Growth Opportunities</h3>
              <p className="text-sm text-amber-700">
                34% repeat customer rate shows loyalty potential. Focus marketing on 26-35 age group during evening
                hours.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

