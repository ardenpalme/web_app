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

const chartConfig = {
  impressions: { label: "Impressions" },
  Asian:    { label: "Asian",    color: "#e76f51" },
  Black:    { label: "Black",    color: "#2a9d8f" },
  Hispanic: { label: "Hispanic", color: "#f4a261" },
  White:    { label: "White",    color: "#e9c46a" },
  Other:    { label: "Other",    color: "#264653" },
};

const raceColors: Record<string, string> = {
  Asian: "#e76f51",
  Black: '#36A2EB',
  Hispanic: '#FFCE56',
  White: '#9966FF',
  Other: '#999999',
};

export function ChartA1() {
  const { data = [] } = trpc.audience.ImpressionByRace.useQuery();

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
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart width={250} height={250}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-black  font-bold"
                        >
                          YOIOOOOO
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors 122
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

