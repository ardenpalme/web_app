"use client"

import { useState } from "react"
import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const chartConfigs = {
  budget: {
    title: "Department Budget Distribution",
    data: [
      { name: "Marketing", value: 2400, fill: "hsl(var(--chart-1))" },
      { name: "Sales", value: 1398, fill: "hsl(var(--chart-2))" },
      { name: "Development", value: 3200, fill: "hsl(var(--chart-3))" },
      { name: "Support", value: 1800, fill: "hsl(var(--chart-4))" },
      { name: "Operations", value: 950, fill: "hsl(var(--chart-5))" },
    ],
  },
  revenue: {
    title: "Revenue by Product Line",
    data: [
      { name: "Software", value: 45000, fill: "hsl(var(--chart-1))" },
      { name: "Hardware", value: 32000, fill: "hsl(var(--chart-2))" },
      { name: "Services", value: 28000, fill: "hsl(var(--chart-3))" },
      { name: "Support", value: 15000, fill: "hsl(var(--chart-4))" },
    ],
  },
  expenses: {
    title: "Monthly Expenses Breakdown",
    data: [
      { name: "Rent", value: 5000, fill: "hsl(var(--chart-1))" },
      { name: "Salaries", value: 25000, fill: "hsl(var(--chart-2))" },
      { name: "Utilities", value: 1200, fill: "hsl(var(--chart-3))" },
      { name: "Marketing", value: 3500, fill: "hsl(var(--chart-4))" },
      { name: "Equipment", value: 2800, fill: "hsl(var(--chart-5))" },
      { name: "Other", value: 1500, fill: "hsl(var(--chart-1))" },
    ],
  },
}

const chartConfig = {
  marketing: {
    label: "Marketing",
    color: "hsl(var(--chart-1))",
  },
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-2))",
  },
  development: {
    label: "Development",
    color: "hsl(var(--chart-3))",
  },
  support: {
    label: "Support",
    color: "hsl(var(--chart-4))",
  },
  operations: {
    label: "Operations",
    color: "hsl(var(--chart-5))",
  },
}

export default function Component() {
  const [selectedChart, setSelectedChart] = useState<keyof typeof chartConfigs>("budget")
  const currentConfig = chartConfigs[selectedChart]
  const data = currentConfig.data

  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <>
      {/* Chart selector in top right */}
      <div className="fixed top-4 right-4 z-10">
        <Select value={selectedChart} onValueChange={(value: keyof typeof chartConfigs) => setSelectedChart(value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select chart type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="budget">Department Budget</SelectItem>
            <SelectItem value="revenue">Revenue by Product</SelectItem>
            <SelectItem value="expenses">Monthly Expenses</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-center space-y-4 p-6">
        <h2 className="text-2xl font-bold text-center">{currentConfig.title}</h2>

        <div className="relative">
          <ChartContainer config={chartConfig} className="aspect-square min-h-[400px] max-h-[400px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
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

          {/* Center total display */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">${total.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">Total Budget</div>
            </div>
          </div>
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
      </div>
    </>
  )
}
