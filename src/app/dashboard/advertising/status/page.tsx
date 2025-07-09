import { CampaignStatusDashboard } from "@/components/campaign-status-dashboard"
import { Card, CardContent } from "@/components/ui/card"
import { Suspense } from "react"
import { Loader2 } from "lucide-react"

export default function StatusPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Campaign Status</h1>
        <p className="text-muted-foreground">Track the approval process of your submitted campaigns.</p>
      </div>
      <Card>
        <CardContent className="px-6">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-24">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            }
          >
            <CampaignStatusDashboard />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

