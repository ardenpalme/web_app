"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, DollarSign, CreditCard, ShoppingBag, Eye, Users, Target, Clock } from "lucide-react"
import { useState } from "react"

// Campaign options for filtering
const campaignOptions = [
  { value: "all", label: "All Campaigns" },
  { value: "back-to-school", label: "Back-to-School Sale" },
  { value: "summer-coffee", label: "Summer Coffee Special" },
  { value: "fitness-membership", label: "Fitness Membership Deal" },
  { value: "luxury-watch", label: "Luxury Watch Promotion" },
  { value: "smartphone-launch", label: "New Smartphone Launch" },
]

// DOOH Campaign Performance Metrics - focused on store owner ROI
const campaignMetrics = [
  {
    title: "Campaign ROI",
    value: "261%",
    change: "+45%",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Total Campaign Spend",
    value: "$1,640",
    change: "Budget Used",
    icon: CreditCard,
    color: "text-blue-600",
  },
  {
    title: "Attributed Revenue",
    value: "$4,280",
    change: "+$1,200",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Store Visits Generated",
    value: "1,240",
    change: "+18.3%",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Purchases Attributed",
    value: "78",
    change: "+12.7%",
    icon: ShoppingBag,
    color: "text-orange-600",
  },
  {
    title: "Cost Per Acquisition",
    value: "$21.03",
    change: "-$3.20",
    icon: Target,
    color: "text-green-600",
  },
  {
    title: "Avg. Dwell Time",
    value: "3.8s",
    change: "+0.6s",
    icon: Clock,
    color: "text-indigo-600",
  },
  {
    title: "Conversion Rate",
    value: "2.1%",
    change: "+0.3%",
    icon: Eye,
    color: "text-green-600",
  },
]

// Campaign Attribution Funnel
const attributionFunnelData = [
  { stage: "Ad Impressions", value: 8420, percentage: 100, fill: "#8b5cf6" },
  { stage: "Engaged Viewers", value: 2840, percentage: 33.7, fill: "#3b82f6" },
  { stage: "Store Visits", value: 1240, percentage: 14.7, fill: "#10b981" },
  { stage: "Purchases", value: 186, percentage: 2.2, fill: "#f59e0b" },
  { stage: "DOOH Attributed", value: 78, percentage: 0.9, fill: "#ef4444" },
]

// Screen Performance Data (different locations in mall)
const screenPerformanceData = [
  { location: "Main Entrance", impressions: 2840, visits: 420, purchases: 28, roi: 340, fill: "#ef4444" },
  { location: "Food Court", impressions: 2100, visits: 380, purchases: 22, roi: 285, fill: "#f97316" },
  { location: "Central Plaza", impressions: 1890, visits: 290, purchases: 18, roi: 220, fill: "#eab308" },
  { location: "Near Anchor Store", impressions: 1590, visits: 150, purchases: 10, roi: 165, fill: "#22c55e" },
]

// Hourly Campaign Performance
const hourlyPerformanceData = [
  { time: "09:00", impressions: 280, visits: 42, purchases: 3, fill: "#3b82f6" },
  { time: "10:00", impressions: 340, visits: 58, purchases: 4, fill: "#3b82f6" },
  { time: "11:00", impressions: 420, visits: 72, purchases: 5, fill: "#3b82f6" },
  { time: "12:00", impressions: 580, visits: 95, purchases: 8, fill: "#3b82f6" },
  { time: "13:00", impressions: 520, visits: 88, purchases: 6, fill: "#3b82f6" },
  { time: "14:00", impressions: 640, visits: 108, purchases: 9, fill: "#3b82f6" },
  { time: "15:00", impressions: 720, visits: 125, purchases: 11, fill: "#3b82f6" },
  { time: "16:00", impressions: 780, visits: 142, purchases: 12, fill: "#3b82f6" },
  { time: "17:00", impressions: 890, visits: 168, purchases: 15, fill: "#3b82f6" },
  { time: "18:00", impressions: 920, visits: 185, purchases: 17, fill: "#3b82f6" },
  { time: "19:00", impressions: 840, visits: 158, purchases: 13, fill: "#3b82f6" },
  { time: "20:00", impressions: 680, visits: 125, purchases: 9, fill: "#3b82f6" },
]

// Demographics of DOOH Converters vs General Audience
const converterAgeData = [
  { name: "18-25", converters: 18, audience: 1680, fill: "#ef4444" },
  { name: "26-35", converters: 24, audience: 2100, fill: "#f97316" },
  { name: "36-45", converters: 19, audience: 1950, fill: "#eab308" },
  { name: "46-55", converters: 12, audience: 1200, fill: "#22c55e" },
  { name: "56+", converters: 5, audience: 600, fill: "#3b82f6" },
]

// Daily Campaign Performance Trend
const dailyTrendData = [
  { date: "Oct 15", spend: 230, revenue: 580, visits: 165, purchases: 12 },
  { date: "Oct 16", spend: 235, revenue: 620, visits: 178, purchases: 13 },
  { date: "Oct 17", spend: 240, revenue: 540, visits: 152, purchases: 10 },
  { date: "Oct 18", spend: 225, revenue: 680, visits: 189, purchases: 15 },
  { date: "Oct 19", spend: 245, revenue: 720, visits: 198, purchases: 16 },
  { date: "Oct 20", spend: 230, revenue: 590, visits: 167, purchases: 11 },
  { date: "Oct 21", spend: 235, revenue: 550, visits: 191, purchases: 1 },
]

// Chart configurations
const funnelConfig = {
  impressions: { label: "Ad Impressions", color: "#8b5cf6" },
  engaged: { label: "Engaged Viewers", color: "#3b82f6" },
  visits: { label: "Store Visits", color: "#10b981" },
  purchases: { label: "Purchases", color: "#f59e0b" },
  attributed: { label: "DOOH Attributed", color: "#ef4444" },
}

const screenConfig = {
  roi: { label: "ROI %", color: "#ef4444" },
  visits: { label: "Store Visits", color: "#3b82f6" },
  purchases: { label: "Purchases", color: "#10b981" },
}

const hourlyConfig = {
  impressions: { label: "Impressions", color: "#8b5cf6" },
  visits: { label: "Store Visits", color: "#3b82f6" },
  purchases: { label: "Purchases", color: "#ef4444" },
}

const converterConfig = {
  "18-25": { label: "18-25", color: "#ef4444" },
  "26-35": { label: "26-35", color: "#f97316" },
  "36-45": { label: "36-45", color: "#eab308" },
  "46-55": { label: "46-55", color: "#22c55e" },
  "56+": { label: "56+", color: "#3b82f6" },
}

const trendConfig = {
  revenue: { label: "Revenue", color: "#10b981" },
  spend: { label: "Ad Spend", color: "#ef4444" },
  visits: { label: "Store Visits", color: "#3b82f6" },
}

export default function AdvertisingPage() {
  const [selectedCampaign, setSelectedCampaign] = useState("all")
  const timeRange = "Oct 15, 2023 10:00 - Oct 22, 2023 19:07 (UTC)"

  const totalSpend = dailyTrendData.reduce((sum, item) => sum + item.spend, 0)
  const totalRevenue = dailyTrendData.reduce((sum, item) => sum + item.revenue, 0)
  const totalVisits = dailyTrendData.reduce((sum, item) => sum + item.visits, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <div className="my-4">
          <h1 className="text-3xl font-bold tracking-tight">DOOH Campaign Performance</h1>
          <p className="text-muted-foreground">
            Comprehensive analytics for your digital out-of-home advertising campaign effectiveness and ROI.
          </p>
        </div>

        {/* Campaign Filter */}
        <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Filter by Campaign" />
          </SelectTrigger>
          <SelectContent>
            {campaignOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Campaign Performance Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {campaignMetrics.map((metric) => (
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

      {/* Row 1: Attribution Funnel and Screen Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campaign Attribution Funnel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Campaign Attribution Funnel</CardTitle>
            <CardDescription>Customer journey from ad impression to purchase - {timeRange}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {attributionFunnelData.map((stage, index) => (
                <div key={stage.stage} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: stage.fill }} />
                    <span className="font-medium">{stage.stage}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{stage.value.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">{stage.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2.1%</div>
                <div className="text-sm text-muted-foreground">Overall Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">14.7%</div>
                <div className="text-sm text-muted-foreground">Visit Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screen Location Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Screen Performance by Location</CardTitle>
            <CardDescription>ROI and effectiveness by mall location - {timeRange}</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={screenConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={screenPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <XAxis
                    dataKey="location"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Bar dataKey="roi" fill="#ef4444" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {screenPerformanceData.map((screen) => (
                <div key={screen.location} className="text-center p-2 bg-accent rounded">
                  <div className="font-medium text-sm">{screen.location}</div>
                  <div className="text-xs text-muted-foreground">
                    {screen.visits} visits • {screen.purchases} purchases
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Hourly Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Hourly Campaign Performance</CardTitle>
          <CardDescription>When your DOOH ads perform best throughout the day - {timeRange}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={hourlyConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="impressions" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="visits" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="purchases" fill="#ef4444" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">18:00</div>
              <div className="text-sm text-muted-foreground">Peak Performance</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">17 purchases</div>
              <div className="text-sm text-muted-foreground">Best Hour</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">2.8%</div>
              <div className="text-sm text-muted-foreground">Peak Conversion</div>
            </div>
            <div className="text-center p-3 bg-accent rounded-lg">
              <div className="text-lg font-bold">$18.50</div>
              <div className="text-sm text-muted-foreground">Best CPA</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Row 3: Demographics and Daily Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Converter Demographics vs General Audience */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Who Responds to Your Ads</CardTitle>
            <CardDescription>Age demographics of customers vs general mall audience</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={converterConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={converterAgeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => [
                          name === "converters" ? `${value} purchasers` : `${value} audience`,
                          name === "converters" ? "Purchasers" : "General Audience",
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="audience" fill="#94a3b8" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="converters" fill="#ef4444" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-5 gap-2 mt-4">
              {converterAgeData.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="text-sm font-bold">{((item.converters / item.audience) * 100).toFixed(1)}%</div>
                  <div className="text-xs text-muted-foreground">{item.name} conv. rate</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Performance Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Daily Campaign Trends</CardTitle>
            <CardDescription>Revenue vs spend performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={trendConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="date" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="spend" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-accent rounded-lg">
                <div className="text-lg font-bold">${totalRevenue.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Revenue</div>
              </div>
              <div className="text-center p-3 bg-accent rounded-lg">
                <div className="text-lg font-bold">${totalSpend.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Spend</div>
              </div>
              <div className="text-center p-3 bg-accent rounded-lg">
                <div className="text-lg font-bold">{totalVisits.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Visits</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Insights Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Insights & Recommendations</CardTitle>
          <CardDescription>Key takeaways from your DOOH campaign performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">🎯 Best Performance</h3>
              <p className="text-sm text-green-700">
                Main Entrance screen delivers highest ROI at 340%. Peak performance at 6-7 PM with 2.8% conversion rate.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">👥 Target Audience</h3>
              <p className="text-sm text-blue-700">
                Ages 26-35 show highest response rate (1.14%). This group converts 40% better than average mall visitor.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">💡 Optimization</h3>
              <p className="text-sm text-amber-700">
                Consider increasing budget for Main Entrance and evening hours. Test creative variations for 18-25
                segment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

