import type { CampaignPerformance } from "./types"
import { subDays } from "date-fns"

const today = new Date()

export const mockPerformanceData: CampaignPerformance = {
  id: "campaign-1",
  name: "Summer Sizzle Sale",
  startDate: subDays(today, 15),
  endDate: new Date("2024-07-31"),
  status: "Live",
  impressions: {
    total: 125430,
    overTime: Array.from({ length: 30 }, (_, i) => ({
      date: subDays(today, 29 - i)
        .toISOString()
        .split("T")[0],
      impressions: Math.floor(Math.random() * 2000) + 3000,
    })),
  },
  audience: {
    age: [
      { ageRange: "18-24", count: 35120 },
      { ageRange: "25-34", count: 48760 },
      { ageRange: "35-44", count: 25430 },
      { ageRange: "45-54", count: 12120 },
      { ageRange: "55+", count: 4000 },
    ],
    gender: [
      { gender: "Female", count: 75258, fill: "var(--color-female, hsl(346.8 77.2% 49.8%))" },
      { gender: "Male", count: 49172, fill: "var(--color-male, hsl(221.2 83.2% 53.3%))" },
      { gender: "Other", count: 1000, fill: "var(--color-other, hsl(262.1 83.3% 57.8%))" },
    ],
  },
  creatives: [
    {
      id: "creative-1",
      name: "Summer Promo Video",
      thumbnail: "/placeholder.svg?width=160&height=90&text=Summer+Ad",
      impressions: 85320,
      avgEngagement: 12.5,
      proofOfPlayCount: 3200,
    },
    {
      id: "creative-2",
      name: "Beach Day Banner",
      thumbnail: "/placeholder.svg?width=160&height=90&text=Beach+Ad",
      impressions: 40110,
      avgEngagement: 8.2,
      proofOfPlayCount: 1000,
    },
  ],
  spend: {
    totalCost: 99,
    totalPlays: 4200,
    allowedPlays: 5000,
  },
}
