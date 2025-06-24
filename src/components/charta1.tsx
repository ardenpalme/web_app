"use client"

import { useState } from "react"
import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { trpc } from '@/lib/trpc';

const chartConfigs = {
  race: {
    title: "Num Purchases by Race",
    config: {
      Asian: { label: "Asian", color: "#f59e0b" },
      Black: { label: "Black", color: "#fbbf24" },
      Hispanic: { label: "Hispanic", color: "#fcd34d" },
      White: { label: "White", color: "#fde68a" },
      Other: { label: "Other", color: "#fff7ed" },
    },
    data: [
      { name: "Asian", value: 1250, fill: "#f59e0b" },
      { name: "Black", value: 980, fill: "#fbbf24" },
      { name: "Hispanic", value: 1420, fill: "#fcd34d" },
      { name: "White", value: 2100, fill: "#fde68a" },
      { name: "Other", value: 350, fill: "#fff7ed" },
    ],
  },
  gender: {
    title: "Num Purchases by Gender",
    config: {
      Male: { label: "Male", color: "#f59e0b" },
      Female: { label: "Female", color: "#fbbf24" },
    },
    data: [
      { name: "Male", value: 3200, fill: "#f59e0b" },
      { name: "Female", value: 2900, fill: "#fbbf24" },
    ],
  },
  age: {
    title: "Num Purchases by Age",
    config: {
      "10-19": { label: "10-19", color: "#f59e0b" },
      "20-29": { label: "20-29", color: "#fbbf24" },
      "30-39": { label: "30-39", color: "#fcd34d" },
      "40-49": { label: "40-49", color: "#fde68a" },
      "50-59": { label: "50-59", color: "#fde68a" },
      "60-69": { label: "60-69", color: "#fde68a" },
      "70-79": { label: "70-79", color: "#fde68a" },
    },
    data: [
      { name: "18-25", value: 890, fill: "#f59e0b" },
      { name: "26-35", value: 1650, fill: "#fbbf24" },
      { name: "36-45", value: 1420, fill: "#fcd34d" },
      { name: "46-55", value: 1180, fill: "#fde68a" },
      { name: "56+", value: 960, fill: "#fff7ed" },
    ],
  },
}

interface DonutChartProps {
  timeRange: { start: string, end: string}
}

export function PurchasePieChart({ timeRange }: DonutChartProps) {
  const [selectedChart, setSelectedChart] = useState<keyof typeof chartConfigs>("race")

  const purchaseByRace = trpc.customers.PurchaseByRace.useQuery(timeRange, {
    enabled: selectedChart === "race",
  });
  const purchaseByGender = trpc.customers.PurchaseByGender.useQuery(timeRange, {
    enabled: selectedChart === "gender",
  });
  const purchaseByAge = trpc.customers.PurchaseByAge.useQuery(timeRange, {
    enabled: selectedChart === "age",
  });

  let rawData: any[] | undefined
  if (selectedChart === "race") rawData = purchaseByRace.data;
  else if (selectedChart === "gender") rawData = purchaseByGender.data;
  else rawData = purchaseByAge.data;

  const currentConfig = chartConfigs[selectedChart]
  const data = rawData?.map((item) => {
    const name = item[selectedChart] // race / gender / age
    const value = item._count ?? 0
    const fill = currentConfig.config[name]?.color ?? "#ccc"
    return { name, value, fill }
  }) ?? []

  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-2xl font-bold">{currentConfig.title}</CardTitle>
        </div>
        <Select value={selectedChart} onValueChange={(value: keyof typeof chartConfigs) => setSelectedChart(value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select chart type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="race">Race</SelectItem>
            <SelectItem value="gender">Gender</SelectItem>
            <SelectItem value="age">Age</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="relative">
          {/* Center total display */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{total.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">Total</div>
            </div>
          </div>
          <ChartContainer config={currentConfig.config} className="aspect-square min-h-[400px] max-h-[400px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => [name, ` ${value.toLocaleString()}`]}
                    labelFormatter={() => ""}
                  />
                }
              />
              <Pie data={data} cx="50%" cy="50%" innerRadius={80} outerRadius={160} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm text-muted-foreground">${item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

