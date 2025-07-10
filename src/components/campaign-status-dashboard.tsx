"use client"

import { useState } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { differenceInDays, format } from "date-fns"
import { FileVideo, Loader2, AlertCircle, CheckSquare } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CampaignStatusBadge, CreativeStatusBadge } from "./status-badges"
import { Badge } from "@/components/ui/badge"
import { trpc } from "@/lib/trpc"

export function CampaignStatusDashboard() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const campaignIdFromUrl = searchParams.get("campaignId")

  const [openAccordionId, setOpenAccordionId] = useState<string | undefined>(campaignIdFromUrl || undefined)

  const { data : campaigns, isLoading, isError } = trpc.campaign.listWithStatus.useQuery()


  const handleAccordionChange = (value: string) => {
    const newOpenId = value === openAccordionId ? undefined : value
    setOpenAccordionId(newOpenId)

    const params = new URLSearchParams(searchParams.toString())
    if (newOpenId) {
      params.set("campaignId", newOpenId)
    } else {
      params.delete("campaignId")
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-destructive">
        <AlertCircle className="h-8 w-8" />
        <p className="mt-2">Failed to load campaigns.</p>
      </div>
    )
  }

  if (!campaigns || campaigns.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-24">
        <p>You have not submitted any campaigns yet.</p>
      </div>
    )
  }


  return (
    <div className="border rounded-lg">
      <div className="flex items-center p-4 font-medium text-sm text-muted-foreground bg-muted/50 gap-4">
          <div className="flex-[4]">Campaign Name</div>
          <div className="flex-[3]">Submitter</div>
          <div className="flex-[2]">Submitted</div>
          <div className="flex-[1]">Creatives</div>
          <div className="flex-[2]">Status</div>
          <div className="w-4" /> {/* Spacer for chevron */}
        </div>
      <Accordion
        type="single"
        value={openAccordionId}
        onValueChange={handleAccordionChange}
        collapsible
        className="w-full"
      >
        {campaigns.map((campaign) => (
          <AccordionItem value={campaign.id} key={campaign.id} className="border-b last:border-b-0">
            <AccordionTrigger className="cursor-pointer flex w-full items-center p-4 gap-4 hover:no-underline text-sm [&[data-state=open]>svg]:rotate-180">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-[4] text-left font-medium">{campaign.name}</div>
                <div className="flex-[3] text-left">{campaign.submittedBy || "-"}</div>
                <div className="flex-[2] text-left">
                  {campaign.submissionDate ? format(new Date(campaign.submissionDate), "PPP") : "-"}
                </div>
                <div className="flex-[1] text-left">{campaign._count.creatives}</div>
                <div className="flex-[2] flex justify-start">
                  <CampaignStatusBadge status={campaign.status} />
                </div>
              </div>
              {/* Chevron is automatically rendered here as the second flex item */}
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
                        <span className="font-medium">{format(new Date(campaign.startDate), "PPP")}</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-muted-foreground">End Date</span>
                        <span className="font-medium">{format(new Date(campaign.endDate), "PPP")}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Campaign Notes</span>
                      <p className="text-sm text-muted-foreground mt-1">{campaign.notes || "No notes provided."}</p>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Creative Status</h3>
                  <div className="space-y-2">
                    {campaign.creatives &&
                      campaign.creatives.map((creative) => (
                        <div key={creative.id} className="bg-background border rounded-lg p-4 flex items-start gap-4">
                          <div className="flex-shrink-0 w-32 aspect-video bg-muted rounded-md overflow-hidden">
                            {creative && creative.fileType.startsWith("video/") ? (
                                <video
                                  src={`/api/r2/${creative.fileUrl}`}
                                  controls={false}
                                  muted
                                  className="w-full h-full object-cover rounded-md"
                                  onMouseOver={(e) => e.currentTarget.play()}
                                  onMouseOut={(e) => e.currentTarget.pause()}
                                />
                              ) : (
                                <img
                                  src={creative.fileUrl ? `/api/r2/${creative.fileUrl}` : "/placeholder.svg"}
                                  alt={creative.name}
                                  className="w-full h-full object-cover"
                                />
                              )}

                          </div>
                          <div className="flex-1 space-y-2">
                            <p className="font-medium">{creative.name}</p>
                            <p className="text-sm text-muted-foreground">{creative.notes || "No notes provided."}</p>
                            {creative.tags && creative.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 pt-1">
                                {creative.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col items-end gap-2 w-36 text-right">
                            <CreativeStatusBadge status={creative.approvalStatus} />
                            {creative.proofOfPlay && (
                              <Badge variant="outline" className="flex items-center gap-1 text-xs">
                                <CheckSquare className="h-3 w-3" />
                                Proof of Play
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    {(!campaign.creatives || campaign.creatives.length === 0) && (
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

