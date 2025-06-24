"use client";

import { useTimeRange } from "@/context/time-range-context"
import { PurchasePieChart } from "@/components/charta1"

export default function CustomersPage() {
  
  const { start, end } = useTimeRange()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer Analytics</h1>
        <p className="text-muted-foreground">Analyze customer demographics, behavior, and purchase patterns.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PurchasePieChart timeRange={{start, end}} />
      </div>
    </div>
  )
}
