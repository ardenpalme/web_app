"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, Cell, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { trpc } from '@/lib/trpc';

const raceColors: Record<string, string> = {
  Asian:    "#f59e0b",
  Black:    "#fbbf24",
  Hispanic: "#fcd34d",
  White:    "#fde68a",
  Other:    "#fff7ed",
};

const chartConfig = {
  Asian:    { label: "Asian",    color: "#f59e0b" },
  Black:    { label: "Black",    color: "#fbbf24" },
  Hispanic: { label: "Hispanic", color: "#fcd34d" },
  White:    { label: "White",    color: "#fde68a" },
  Other:    { label: "Other",    color: "#fff7ed" },
};

const genderColors: Record<string, string> = {
  Male:    "#f59e0b",
  Female:  "#fbbf24",
};

const chartConfig1 = {
  Male:     { label: "Male",    color: "#f59e0b" },
  Female:   { label: "Female",  color: "#fbbf24" },
};

export function ChartA1() {
  const { data = [] } = trpc.audience.PurchaseByRace.useQuery();

  const chartData = data.map((row) => ({
    label: row.race,
    value: row._count,
    fill: chartConfig[row.race]?.color,
  }));
  const total_impressions = chartData.reduce((sum, row) => sum + row.value, 0);

  if (!chartData.length) return <div>No data</div>;

  return (
     <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Purchase (by Ethnicity)</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{total_impressions.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">Total</div>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]" >
            <PieChart width={250} height={250}>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    formatter={(value, label) => [`${value.toLocaleString()} `, label]}
                    labelFormatter={() => ""}
                  />
                }
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="label"
                innerRadius={60}
                strokeWidth={5}
              >
              {chartData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          {/* Center total display */}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {chartData.map((item, index) => (
          <div key={item.label} className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      </CardFooter>
    </Card>
  );
}

