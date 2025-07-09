import { CampaignStatusDashboard } from "@/components/campaign-status-dashboard"
import { Card, CardContent } from "@/components/ui/card"

export default function StatusPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Campaign Status</h1>
        <p className="text-muted-foreground">Track the approval process of your submitted campaigns.</p>
      </div>
      <Card>
        <CardContent className="p-0">
          <CampaignStatusDashboard />
        </CardContent>
      </Card>
    </div>
  )
}
