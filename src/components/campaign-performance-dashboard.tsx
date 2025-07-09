"use client"

import { useState } from "react"
import { Area, AreaChart, Bar, BarChart, Pie, PieChart, ResponsiveContainer, Sector, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { CampaignPerformance, PerformanceStatus } from "@/lib/types"
import { format } from "date-fns"
import { ArrowLeft, Download, DollarSign, PlayCircle } from "lucide-react"

const StatusBadge = ({ status }: { status: PerformanceStatus }) => {
  const config = {
    Live: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800",
    Ended: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/50 dark:text-gray-400 dark:border-gray-800",
    Approved: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800",
  }
  return <Badge className={config[status]}>{status}</Badge>
}

const ActivePieSector = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="text-2xl font-bold">
        {payload.gender}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  )
}

export function CampaignPerformanceDashboard({ data }: { data: CampaignPerformance }) {
  const [timeSpan, setTimeSpan] = useState("30 Days")
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const eCPM =
    data.spend.totalCost && data.impressions.total ? (data.spend.totalCost / data.impressions.total) * 1000 : 0

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-10">
        {/* Header */}
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">{data.name}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{`${format(data.startDate, "LLL d, yyyy")} - ${format(data.endDate, "LLL d, yyyy")}`}</span>
            <span className="font-semibold">Total Cost: £{data.spend.totalCost.toLocaleString()}</span>
            <StatusBadge status={data.status} />
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-6 lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Impressions Over Time</CardTitle>
                <div className="flex gap-1">
                  {["Today", "7 Days", "30 Days"].map((ts) => (
                    <Button
                      key={ts}
                      size="sm"
                      variant={timeSpan === ts ? "default" : "outline"}
                      onClick={() => setTimeSpan(ts)}
                    >
                      {ts}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      impressions: {
                        label: "Impressions",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data.impressions.overTime}>
                        <defs>
                          <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-impressions)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="var(--color-impressions)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="impressions"
                          stroke="var(--color-impressions)"
                          fillOpacity={1}
                          fill="url(#colorImpressions)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Creative Performance</CardTitle>
                <CardDescription>Impressions and engagement for each creative asset.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Creative</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Impressions</TableHead>
                      <TableHead className="text-right">Avg. Engagement (s)</TableHead>
                      <TableHead className="text-right">Proof of Play</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.creatives.map((creative) => (
                      <TableRow key={creative.id}>
                        <TableCell>
                          <img
                            src={creative.thumbnail || "/placeholder.svg"}
                            alt={creative.name}
                            className="aspect-video rounded-md object-cover"
                          />
                        </TableCell>
                        <TableCell className="font-medium">{creative.name}</TableCell>
                        <TableCell className="text-right">{creative.impressions.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{creative.avgEngagement.toFixed(1)}</TableCell>
                        <TableCell className="text-right">{creative.proofOfPlayCount.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Audience Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div>
                  <h3 className="text-md font-semibold mb-2">Age Distribution</h3>
                  <div className="h-[200px]">
                    <ChartContainer
                      config={{
                        count: {
                          label: "Count",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data.audience.age} layout="vertical" margin={{ left: 10 }}>
                          <XAxis type="number" hide />
                          <YAxis
                            dataKey="ageRange"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            width={50}
                          />
                          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                          <Bar dataKey="count" fill="var(--color-count)" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-semibold mb-2">Gender Split</h3>
                  <div className="h-[200px]">
                    <ChartContainer config={{}}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                          <Pie
                            activeIndex={activeIndex}
                            activeShape={ActivePieSector}
                            data={data.audience.gender}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="count"
                            onMouseEnter={onPieEnter}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Spend Efficiency</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">£{eCPM.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">Effective Cost per 1,000 Impressions (eCPM)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Plays</CardTitle>
                <PlayCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.spend.totalPlays.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  of {data.spend.allowedPlays.toLocaleString()} plays used
                </p>
                <Progress
                  value={(data.spend.totalPlays / data.spend.allowedPlays) * 100}
                  className="mt-2"
                  aria-label="Play usage"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="sticky bottom-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-end gap-2 p-4">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Campaigns
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download Report (PDF)
          </Button>
        </div>
      </footer>
    </div>
  )
}
