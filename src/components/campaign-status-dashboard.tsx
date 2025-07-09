"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockCampaigns as initialCampaigns } from "@/lib/data"
import type { Campaign } from "@/lib/types"
import { format, differenceInDays } from "date-fns"
import { FileVideo } from "lucide-react"
import { CampaignStatusBadge, CreativeStatusBadge } from "./status-badges"

export function CampaignStatusDashboard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns)

  if (campaigns.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-24">
        <p>You have not submitted any campaigns yet.</p>
      </div>
    )
  }

  return (
    <div className="border rounded-lg">
      <div className="grid grid-cols-12 items-center p-4 font-medium text-sm text-muted-foreground bg-muted/50">
        <div className="col-span-4">Campaign Name</div>
        <div className="col-span-3">Submitter</div>
        <div className="col-span-2">Submitted</div>
        <div className="col-span-1">Creatives</div>
        <div className="col-span-2">Status</div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {campaigns.map((campaign) => (
          <AccordionItem value={campaign.id} key={campaign.id} className="border-b last:border-b-0">
            <AccordionTrigger className="grid grid-cols-12 items-center p-4 hover:no-underline [&[data-state=open]>svg]:rotate-180">
              <div className="col-span-4 text-left font-medium">{campaign.name}</div>
              <div className="col-span-3 text-left">{campaign.submittedBy}</div>
              <div className="col-span-2 text-left">{format(campaign.submissionDate, "PPP")}</div>
              <div className="col-span-1 text-left">{campaign.creatives.length}</div>
              <div className="col-span-2 flex justify-start">
                <CampaignStatusBadge status={campaign.status} />
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-muted/30">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Campaign Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex flex-col space-y-1">
                        <span className="text-muted-foreground">Start Date</span>
                        <span className="font-medium">{format(campaign.startDate, "PPP")}</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-muted-foreground">End Date</span>
                        <span className="font-medium">{format(campaign.endDate, "PPP")}</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">
                          {differenceInDays(campaign.endDate, campaign.startDate) + 1} days
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Targeting Tags</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {campaign.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Creative Status</h3>
                  <div className="space-y-2">
                    {campaign.creatives.map((creative) => (
                      <div key={creative.id} className="bg-background border rounded-lg p-4 flex items-center gap-4">
                        <div className="flex-shrink-0 w-32 aspect-video bg-muted rounded-md overflow-hidden">
                          {creative.preview ? (
                            <img
                              src={creative.preview || "/placeholder.svg"}
                              alt={creative.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FileVideo className="w-8 h-8 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{creative.name}</p>
                          <p className="text-sm text-muted-foreground">{creative.notes || "No notes provided."}</p>
                        </div>
                        <CreativeStatusBadge status={creative.approvalStatus} />
                      </div>
                    ))}
                    {campaign.creatives.length === 0 && (
                      <div className="bg-background border rounded-lg p-4 text-center text-sm text-muted-foreground">
                        This campaign has no creatives.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
