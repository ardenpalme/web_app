"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Users, Clock, MapPin, TrendingUp, DollarSign, Target, Zap } from "lucide-react"
import { useState } from "react"

// Screen location options for filtering
const screenLocationOptions = [
  { value: "all", label: "All Screen Locations" },
  { value: "main-entrance", label: "Main Entrance" },
  { value: "food-court", label: "Food Court" },
  { value: "central-plaza", label: "Central Plaza" },
  { value: "anchor-store", label: "Near Anchor Store" },
  { value: "escalator-area", label: "Escalator Area" },
]

// DOOH Network Performance Metrics - focused on mall owner insights
const networkMetrics = [
  {
    title: "Total Daily Impressions",
    value: "24,680",
    change: "+15.2%",
    icon: Eye,
    color: "text-blue-600",
  },
  {
    title: "Unique Daily Visitors",
    value: "8,420",
    change: "+12.3%",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Average Dwell Time",
    value: "4.2s",
    change: "+0.8s",
    icon: Clock,
    color: "text-purple-600",
  },
  {
    title: "Screen Engagement Rate",
    value: "68.4%",
    change: "+5.1%",
    icon: Target,
    color: "text-orange-600",
  },
  {
    title: "Peak Hour Traffic",
    value: "1,840",
    change: "6-7 PM",
    icon: TrendingUp,
    color: "text-indigo-600",
  },
  {
    title: "Ad Revenue Potential",
    value: "$2,840",
    change: "+18.7%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "High-Value Demographics",
    value: "42.3%",
    change: "+3.2%",
    icon: Zap,
    color: "text-amber-600",
  },
  {
    title: "Screen Utilization",
    value: "89.2%",
    change: "+6.8%",
    icon: MapPin,
    color: "text-teal-600",
  },
]

// Screen Location Performance Data
const screenLocationData = [
  { location: "Main Entrance", impressions: 6840, engagement: 72.4, dwellTime: 5.2, revenue: 980, fill: "#ef4444" },
  { location: "Food Court", impressions: 5920, engagement: 68.1, dwellTime: 4.8, revenue: 720, fill: "#f97316" },
  { location: "Central Plaza", impressions: 4680, engagement: 65.3, dwellTime: 3.9, revenue: 580, fill: "#eab308" },
  { location: "Anchor Store", impressions: 3840, engagement: 61.2, dwellTime: 3.2, revenue: 420, fill: "#22c55e" },
  { location: "Escalator Area", impressions: 3400, engagement: 70.8, dwellTime: 4.1, revenue: 380, fill: "#3b82f6" },
]

// Mall Area Demographics - Age breakdown by location
const mallAreaAgeData = [
  {
    area: "Main Entrance",
    "13-17": 420,
    "18-24": 890,
    "25-34": 1240,
    "35-44": 980,
    "45-54": 680,
    "55+": 340,
    fill: "#ef4444",
  },
  {
    area: "Food Court",
    "13-17": 680,
    "18-24": 1240,
    "25-34": 980,
    "35-44": 720,
    "45-54": 420,
    "55+": 280,
    fill: "#f97316",
  },
  {
    area: "Central Plaza",
    "13-17": 320,
    "18-24": 680,
    "25-34": 890,
    "35-44": 840,
    "45-54": 580,
    "55+": 380,
    fill: "#eab308",
  },
  {
    area: "Anchor Store",
    "13-17": 180,
    "18-24": 420,
    "25-34": 680,
    "35-44": 720,
    "45-54": 640,
    "55+": 480,
    fill: "#22c55e",
  },
]

// Overall Mall Demographics - Gender and Age
const overallAgeData = [
  { name: "13-17", value: 1600, percentage: 19.0, avgSpend: 28.5, fill: "#ef4444" },
  { name: "18-24", value: 3230, percentage: 38.4, avgSpend: 45.2, fill: "#f97316" },
  { name: "25-34", value: 1890, percentage: 22.4, avgSpend: 67.8, fill: "#eab308" },
  { name: "35-44", value: 1260, percentage: 15.0, avgSpend: 82.4, fill: "#22c55e" },
  { name: "45-54", value: 320, percentage: 3.8, avgSpend: 95.6, fill: "#3b82f6" },
  { name: "55+", value: 120, percentage: 1.4, avgSpend: 110.3, fill: "#8b5cf6" },
]

const overallGenderData = [
  { name: "Female", value: 4680, percentage: 55.6, avgDwell: 4.8, fill: "#ec4899" },
  { name: "Male", value: 3420, percentage: 40.6, avgDwell: 3.6, fill: "#3b82f6" },
]

// Hourly Foot Traffic by Location
const hourlyTrafficByLocationData = [
  {
    time: "08:00",
    mainEntrance: 180,
    foodCourt: 45,
    centralPlaza: 120,
    anchorStore: 80,
    escalator: 95,
    fill: "#8b5cf6",
  },
  {
    time: "09:00",
    mainEntrance: 240,
    foodCourt: 78,
    centralPlaza: 160,
    anchorStore: 120,
    escalator: 140,
    fill: "#8b5cf6",
  },
  {
    time: "10:00",
    mainEntrance: 320,
    foodCourt: 145,
    centralPlaza: 220,
    anchorStore: 180,
    escalator: 190,
    fill: "#8b5cf6",
  },
  {
    time: "11:00",
    mainEntrance: 380,
    foodCourt: 220,
    centralPlaza: 280,
    anchorStore: 240,
    escalator: 230,
    fill: "#8b5cf6",
  },
  {
    time: "12:00",
    mainEntrance: 420,
    foodCourt: 380,
    centralPlaza: 340,
    anchorStore: 280,
    escalator: 280,
    fill: "#8b5cf6",
  },
  {
    time: "13:00",
    mainEntrance: 460,
    foodCourt: 420,
    centralPlaza: 380,
    anchorStore: 320,
    escalator: 310,
    fill: "#8b5cf6",
  },
  {
    time: "14:00",
    mainEntrance: 520,
    foodCourt: 480,
    centralPlaza: 420,
    anchorStore: 360,
    escalator: 340,
    fill: "#8b5cf6",
  },
  {
    time: "15:00",
    mainEntrance: 580,
    foodCourt: 520,
    centralPlaza: 460,
    anchorStore: 400,
    escalator: 380,
    fill: "#8b5cf6",
  },
  {
    time: "16:00",
    mainEntrance: 640,
    foodCourt: 580,
    centralPlaza: 520,
    anchorStore: 460,
    escalator: 420,
    fill: "#8b5cf6",
  },
  {
    time: "17:00",
    mainEntrance: 720,
    foodCourt: 640,
    centralPlaza: 580,
    anchorStore: 520,
    escalator: 480,
    fill: "#8b5cf6",
  },
  {
    time: "18:00",
    mainEntrance: 780,
    foodCourt: 720,
    centralPlaza: 640,
    anchorStore: 580,
    escalator: 540,
    fill: "#8b5cf6",
  },
  {
    time: "19:00",
    mainEntrance: 680,
    foodCourt: 620,
    centralPlaza: 560,
    anchorStore: 480,
    escalator: 460,
    fill: "#8b5cf6",
  },
  {
    time: "20:00",
    mainEntrance: 520,
    foodCourt: 480,
    centralPlaza: 420,
    anchorStore: 360,
    escalator: 340,
    fill: "#8b5cf6",
  },
  {
    time: "21:00",
    mainEntrance: 380,
    foodCourt: 320,
    centralPlaza: 280,
    anchorStore: 240,
    escalator: 220,
    fill: "#8b5cf6",
  },
]

// Engagement Metrics by Demographics
const engagementByDemographicsData = [
  { demographic: "Teens (13-17)", engagement: 78.2, dwellTime: 3.8, conversionRate: 12.4, fill: "#ef4444" },
  { demographic: "Young Adults (18-24)", engagement: 72.6, dwellTime: 4.2, conversionRate: 18.7, fill: "#f97316" },
  { demographic: "Adults (25-34)", engagement: 68.4, dwellTime: 4.8, conversionRate: 24.3, fill: "#eab308" },
  { demographic: "Middle-aged (35-44)", engagement: 65.1, dwellTime: 5.2, conversionRate: 28.9, fill: "#22c55e" },
  { demographic: "Seniors (45+)", engagement: 71.8, dwellTime: 6.1, conversionRate: 32.4, fill: "#3b82f6" },
]

// Revenue Potential by Time Slot
const revenueByTimeSlotData = [
  { timeSlot: "Morning (8-12)", potential: 420, occupancy: 68, cpm: 12.5, fill: "#3b82f6" },
  { timeSlot: "Afternoon (12-17)", potential: 680, occupancy: 89, cpm: 18.2, fill: "#10b981" },
  { timeSlot: "Evening (17-21)", potential: 840, occupancy: 95, cpm: 22.8, fill: "#f59e0b" },
  { timeSlot: "Late Evening (21-22)", potential: 280, occupancy: 45, cpm: 8.9, fill: "#6b7280" },
]

// Chart configurations
const locationConfig = {
  impressions: { label: "Daily Impressions", color: "#ef4444" },
  engagement: { label: "Engagement Rate", color: "#3b82f6" },
  revenue: { label: "Revenue Potential", color: "#10b981" },
}

const ageConfig = {
  "13-17": { label: "13-17", color: "#ef4444" },
  "18-24": { label: "18-24", color: "#f97316" },
  "25-34": { label: "25-34", color: "#eab308" },
  "35-44": { label: "35-44", color: "#22c55e" },
  "45-54": { label: "45-54", color: "#3b82f6" },
  "55+": { label: "55+", color: "#8b5cf6" },
}

const genderConfig = {
  Female: { label: "Female", color: "#ec4899" },
  Male: { label: "Male", color: "#3b82f6" },
  Other: { label: "Other", color: "#6b7280" },
}

const trafficConfig = {
  mainEntrance: { label: "Main Entrance", color: "#ef4444" },
  foodCourt: { label: "Food Court", color: "#f97316" },
  centralPlaza: { label: "Central Plaza", color: "#eab308" },
  anchorStore: { label: "Anchor Store", color: "#22c55e" },
  escalator: { label: "Escalator Area", color: "#3b82f6" },
}

const engagementConfig = {
  engagement: { label: "Engagement Rate", color: "#3b82f6" },
}

const revenueConfig = {
  potential: { label: "Revenue Potential", color: "#10b981" },
}

export default function AudiencePage() {
  const [selectedLocation, setSelectedLocation] = useState("all")
  const timeRange = "Oct 15, 2023 10:00 - Oct 22, 2023 19:07 (UTC)"

  const totalImpressions = screenLocationData.reduce((sum, item) => sum + item.impressions, 0)
  const avgEngagement = screenLocationData.reduce((sum, item) => sum + item.engagement, 0) / screenLocationData.length
  const totalRevenuePotential = screenLocationData.reduce((sum, item) => sum + item.revenue, 0)
  const ageTotal = overallAgeData.reduce((sum, item) => sum + item.value, 0)
  const genderTotal = overallGenderData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <div className="my-4">
          <h1 className="text-3xl font-bold tracking-tight">DOOH Network Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your digital signage network performance, audience demographics, and revenue
            optimization opportunities.
          </p>
        </div>

        {/* Screen Location Filter */}
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            {screenLocationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* DOOH Network Performance Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {networkMetrics.map((metric) => (
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

      {/* Row 1: Screen Location Performance and Overall Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Screen Location Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Screen Location Performance</CardTitle>
            <CardDescription>Daily impressions and engagement by screen location - {timeRange}</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={locationConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={screenLocationData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
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
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, props) => [
                          name === "impressions"
                            ? `${value.toLocaleString()} impressions`
                            : name === "engagement"
                              ? `${value}% engagement`
                              : `$${value} revenue potential`,
                          props.payload.location,
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="impressions" fill="#ef4444" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {screenLocationData.slice(0, 4).map((location) => (
                <div key={location.location} className="text-center p-2 bg-accent rounded text-xs">
                  <div className="font-medium">{location.location}</div>
                  <div className="text-muted-foreground">{location.engagement}% engagement</div>
                  <div className="text-muted-foreground">{location.dwellTime}s dwell</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overall Mall Demographics - Age */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Mall Visitor Demographics by Age</CardTitle>
            <CardDescription>Age breakdown with spending potential - {timeRange}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative">
              <ChartContainer config={ageConfig} className="aspect-square min-h-[250px] max-h-[250px]">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, props) => [
                          `${value.toLocaleString()} visitors • Avg spend: $${props.payload.avgSpend}`,
                          name,
                        ]}
                        labelFormatter={() => ""}
                      />
                    }
                  />
                  <Pie
                    data={overallAgeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {overallAgeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">{ageTotal.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Daily Visitors</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 w-full">
              {overallAgeData.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-2 bg-accent rounded text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{item.percentage}%</div>
                    <div className="text-muted-foreground">${item.avgSpend}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Gender Demographics and Engagement by Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overall Mall Demographics - Gender */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Mall Visitor Demographics by Gender</CardTitle>
            <CardDescription>Gender breakdown with engagement patterns</CardDescription>
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
                          `${value.toLocaleString()} visitors • Avg dwell: ${props.payload.avgDwell}s`,
                          name,
                        ]}
                        labelFormatter={() => ""}
                      />
                    }
                  />
                  <Pie
                    data={overallGenderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {overallGenderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">{genderTotal.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Daily Visitors</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-4 w-full">
              {overallGenderData.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-2 bg-accent rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{item.value.toLocaleString()} visitors</div>
                    <div className="text-xs text-muted-foreground">Avg dwell: {item.avgDwell}s</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Engagement by Demographics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Engagement by Demographics</CardTitle>
            <CardDescription>How different age groups interact with your screens</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={engagementConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementByDemographicsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <XAxis
                    dataKey="demographic"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 9 }}
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
                          `${value}% engagement • ${props.payload.dwellTime}s dwell • ${props.payload.conversionRate}% conversion`,
                          props.payload.demographic,
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="engagement" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {engagementByDemographicsData.slice(0, 4).map((demo) => (
                <div key={demo.demographic} className="text-center p-2 bg-accent rounded text-xs">
                  <div className="font-medium">{demo.demographic.split(" ")[0]}</div>
                  <div className="text-muted-foreground">{demo.conversionRate}% conversion</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 3: Hourly Traffic by Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Hourly Traffic by Screen Location</CardTitle>
          <CardDescription>Foot traffic patterns throughout the day by mall area - {timeRange}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={trafficConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyTrafficByLocationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="mainEntrance" fill="#ef4444" radius={[1, 1, 0, 0]} />
                <Bar dataKey="foodCourt" fill="#f97316" radius={[1, 1, 0, 0]} />
                <Bar dataKey="centralPlaza" fill="#eab308" radius={[1, 1, 0, 0]} />
                <Bar dataKey="anchorStore" fill="#22c55e" radius={[1, 1, 0, 0]} />
                <Bar dataKey="escalator" fill="#3b82f6" radius={[1, 1, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-5 gap-2 mt-4">
            <div className="text-center p-2 bg-accent rounded text-xs">
              <div className="w-3 h-3 bg-red-500 rounded mx-auto mb-1"></div>
              <div className="font-medium">Main Entrance</div>
              <div className="text-muted-foreground">Highest Traffic</div>
            </div>
            <div className="text-center p-2 bg-accent rounded text-xs">
              <div className="w-3 h-3 bg-orange-500 rounded mx-auto mb-1"></div>
              <div className="font-medium">Food Court</div>
              <div className="text-muted-foreground">Lunch Peak</div>
            </div>
            <div className="text-center p-2 bg-accent rounded text-xs">
              <div className="w-3 h-3 bg-yellow-500 rounded mx-auto mb-1"></div>
              <div className="font-medium">Central Plaza</div>
              <div className="text-muted-foreground">Steady Flow</div>
            </div>
            <div className="text-center p-2 bg-accent rounded text-xs">
              <div className="w-3 h-3 bg-green-500 rounded mx-auto mb-1"></div>
              <div className="font-medium">Anchor Store</div>
              <div className="text-muted-foreground">Evening Peak</div>
            </div>
            <div className="text-center p-2 bg-accent rounded text-xs">
              <div className="w-3 h-3 bg-blue-500 rounded mx-auto mb-1"></div>
              <div className="font-medium">Escalator</div>
              <div className="text-muted-foreground">High Engagement</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Row 4: Revenue Potential by Time Slot */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Advertising Revenue Potential by Time Slot</CardTitle>
          <CardDescription>Optimize your advertising rates based on traffic and engagement patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={revenueConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueByTimeSlotData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="timeSlot" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      formatter={(value, name, props) => [
                        `$${value} potential • ${props.payload.occupancy}% occupancy • $${props.payload.cpm} CPM`,
                        props.payload.timeSlot,
                      ]}
                    />
                  }
                />
                <Bar dataKey="potential" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {revenueByTimeSlotData.map((slot) => (
              <div key={slot.timeSlot} className="text-center p-3 bg-accent rounded-lg">
                <div className="text-lg font-bold">${slot.potential}</div>
                <div className="text-sm text-muted-foreground">{slot.timeSlot}</div>
                <div className="text-xs text-muted-foreground">{slot.occupancy}% occupied</div>
                <div className="text-xs text-muted-foreground">${slot.cpm} CPM</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mall Owner Insights Summary */}
      <Card>
        <CardHeader>
          <CardTitle>DOOH Network Insights & Revenue Optimization</CardTitle>
          <CardDescription>
            Key insights for maximizing your digital signage network performance and revenue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">🎯 Prime Locations</h3>
              <p className="text-sm text-green-700">
                Main Entrance delivers 6,840 daily impressions with 72.4% engagement. Food Court peaks during lunch
                hours with high dwell times.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">👥 Audience Profile</h3>
              <p className="text-sm text-blue-700">
                38% of visitors are 18-24 years old. Female visitors (55.6%) show longer dwell times. Teens have highest
                engagement at 78.2%.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-amber-50 border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">💰 Revenue Optimization</h3>
              <p className="text-sm text-amber-700">
                Evening slots (5-9 PM) command highest CPM at $22.80. Consider premium pricing for Main Entrance and
                Food Court locations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

