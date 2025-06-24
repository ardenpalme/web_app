"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, Target, Megaphone, DollarSign, Eye, ShoppingBag, TrendingUp, Store } from "lucide-react"

// Overview metrics combining DOOH attribution, audience, and customers
const overviewMetrics = [
  {
    title: "DOOH Impressions",
    value: "8,420",
    change: "+12.3%",
    icon: Eye,
    color: "text-purple-600",
  },
  {
    title: "Store Visitors",
    value: "1,240",
    change: "+8.7%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "DOOH Attributed Sales",
    value: "$4,280",
    change: "+15.2%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Conversion Rate",
    value: "2.1%",
    change: "+0.4%",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Total Purchases",
    value: "186",
    change: "+11.8%",
    icon: ShoppingBag,
    color: "text-orange-600",
  },
  {
    title: "Avg Purchase Value",
    value: "$67.50",
    change: "+3.2%",
    icon: Store,
    color: "text-indigo-600",
  },
]

// DOOH Attribution Funnel Data
const attributionFunnelData = [
  { name: "DOOH Impressions", value: 8420, fill: "#8b5cf6" },
  { name: "Store Visitors", value: 1240, fill: "#3b82f6" },
  { name: "Purchasers", value: 186, fill: "#10b981" },
  { name: "DOOH Attributed", value: 78, fill: "#ef4444" },
]

// Passer-by Demographics (All DOOH Viewers)
const passerbyAgeData = [
  { name: "13-17", value: 890, fill: "#ef4444" },
  { name: "18-24", value: 1680, fill: "#f97316" },
  { name: "25-34", value: 2100, fill: "#eab308" },
  { name: "35-44", value: 1950, fill: "#22c55e" },
  { name: "45-54", value: 1200, fill: "#3b82f6" },
  { name: "55+", value: 600, fill: "#8b5cf6" },
]

// Customer Demographics (Actual Purchasers)
const customerAgeData = [
  { name: "18-24", value: 28, fill: "#f97316" },
  { name: "25-34", value: 52, fill: "#eab308" },
  { name: "35-44", value: 48, fill: "#22c55e" },
  { name: "46-55", value: 35, fill: "#3b82f6" },
  { name: "56+", value: 23, fill: "#8b5cf6" },
]

// DOOH Attribution Timeline (hourly attributed purchases)
const attributionTimelineData = [
  { time: "09:00", attributed: 1, total: 8, fill: "#ef4444" },
  { time: "10:00", attributed: 2, total: 12, fill: "#ef4444" },
  { time: "11:00", attributed: 3, total: 15, fill: "#ef4444" },
  { time: "12:00", attributed: 5, total: 18, fill: "#ef4444" },
  { time: "13:00", attributed: 6, total: 16, fill: "#ef4444" },
  { time: "14:00", attributed: 7, total: 19, fill: "#ef4444" },
  { time: "15:00", attributed: 8, total: 22, fill: "#ef4444" },
  { time: "16:00", attributed: 9, total: 24, fill: "#ef4444" },
  { time: "17:00", attributed: 11, total: 28, fill: "#ef4444" },
  { time: "18:00", attributed: 12, total: 31, fill: "#ef4444" },
  { time: "19:00", attributed: 9, total: 25, fill: "#ef4444" },
  { time: "20:00", attributed: 5, total: 18, fill: "#ef4444" },
]

const funnelConfig = {
  impressions: { label: "DOOH Impressions", color: "#8b5cf6" },
  visitors: { label: "Store Visitors", color: "#3b82f6" },
  purchasers: { label: "Purchasers", color: "#10b981" },
  attributed: { label: "DOOH Attributed", color: "#ef4444" },
}

const passerbyConfig = {
  "13-17": { label: "13-17", color: "#ef4444" },
  "18-24": { label: "18-24", color: "#f97316" },
  "25-34": { label: "25-34", color: "#eab308" },
  "35-44": { label: "35-44", color: "#22c55e" },
  "45-54": { label: "45-54", color: "#3b82f6" },
  "55+": { label: "55+", color: "#8b5cf6" },
}

const customerConfig = {
  "18-24": { label: "18-24", color: "#f97316" },
  "25-34": { label: "25-34", color: "#eab308" },
  "35-44": { label: "35-44", color: "#22c55e" },
  "46-55": { label: "46-55", color: "#3b82f6" },
  "56+": { label: "56+", color: "#8b5cf6" },
}

const attributionConfig = {
  attributed: { label: "DOOH Attributed", color: "#ef4444" },
  total: { label: "Total Purchases", color: "#94a3b8" },
}

export default function HomePage() {
  const timeRange = "Oct 15, 2023 10:00 - Oct 22, 2023 19:07 (UTC)"
  const passerbyTotal = passerbyAgeData.reduce((sum, item) => sum + item.value, 0)
  const customerTotal = customerAgeData.reduce((sum, item) => sum + item.value, 0)
  const totalAttributed = attributionTimelineData.reduce((sum, item) => sum + item.attributed, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">DOOH Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of digital signage performance, passer-by audience insights, and customer attribution analytics.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DOOH Attribution Funnel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">DOOH Attribution Funnel</CardTitle>
            <CardDescription>Journey from impression to attributed purchase - {timeRange}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative">
              <ChartContainer config={funnelConfig} className="aspect-square min-h-[300px] max-h-[300px]">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => [`${value.toLocaleString()}`, name]}
                        labelFormatter={() => ""}
                      />
                    }
                  />
                  <Pie
                    data={attributionFunnelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {attributionFunnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">2.1%</div>
                  <div className="text-sm text-muted-foreground">Conversion</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-6 w-full">
              {attributionFunnelData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Passer-by vs Customer Demographics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Passer-by Demographics</CardTitle>
            <CardDescription>All DOOH viewers by age - {timeRange}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative">
              <ChartContainer config={passerbyConfig} className="aspect-square min-h-[300px] max-h-[300px]">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => [`${value.toLocaleString()} viewers`, name]}
                        labelFormatter={() => ""}
                      />
                    }
                  />
                  <Pie
                    data={passerbyAgeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {passerbyAgeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{passerbyTotal.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Viewers</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {passerbyAgeData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Demographics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Customer Demographics</CardTitle>
          <CardDescription>Age breakdown of actual purchasers - {timeRange}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-foreground">{customerTotal}</div>
            <div className="text-sm text-muted-foreground">Total Customers</div>
          </div>

          <ChartContainer config={customerConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerAgeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis hide />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      formatter={(value) => [`${value} customers`, "Purchases"]}
                      labelFormatter={(label) => `Age ${label}`}
                    />
                  }
                />
                <Bar dataKey="value" fill="#eab308" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-5 gap-4 mt-6">
            {customerAgeData.map((item) => (
              <div key={item.name} className="text-center">
                <div className="text-lg font-bold">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* DOOH Attribution Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">DOOH Attribution Timeline</CardTitle>
          <CardDescription>Hourly attributed purchases vs total purchases - {timeRange}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-foreground">{totalAttributed}</div>
            <div className="text-sm text-muted-foreground">DOOH Attributed Purchases Today</div>
          </div>

          <ChartContainer config={attributionConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attributionTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="total" fill="#94a3b8" radius={[2, 2, 0, 0]} />
                <Bar dataKey="attributed" fill="#ef4444" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">42%</div>
              <div className="text-sm text-muted-foreground">Attribution Rate</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">18:00</div>
              <div className="text-sm text-muted-foreground">Peak Hour</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">$54.87</div>
              <div className="text-sm text-muted-foreground">Avg DOOH Sale</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">14.7%</div>
              <div className="text-sm text-muted-foreground">Store Visit Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Navigate to detailed analytics sections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/customers"
              className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-accent transition-colors"
            >
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">Customer Analytics</h3>
                <p className="text-sm text-muted-foreground">Purchase patterns and demographics</p>
              </div>
            </a>
            <a
              href="/audience"
              className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-accent transition-colors"
            >
              <Target className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="font-semibold">Audience Insights</h3>
                <p className="text-sm text-muted-foreground">DOOH viewer demographics</p>
              </div>
            </a>
            <a
              href="/advertising"
              className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-accent transition-colors"
            >
              <Megaphone className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">DOOH Performance</h3>
                <p className="text-sm text-muted-foreground">Attribution and campaign ROI</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

