export interface CampaignPerformance {
  id: string
  name: string
  startDate: Date
  endDate: Date
  status: PerformanceStatus
  impressions: {
    total: number
    overTime: { date: string; impressions: number }[]
  }
  audience: {
    age: { ageRange: string; count: number }[]
    gender: { gender: string; count: number; fill: string }[]
  }
  creatives: {
    id: string
    name: string
    thumbnail: string
    impressions: number
    avgEngagement: number
    proofOfPlayCount: number
  }[]
  spend: {
    totalCost: number
    totalPlays: number
    allowedPlays: number
  }
}

export type PerformanceStatus = "Live" | "Ended" | "Approved"

export interface Campaign {
  id: string
  name: string
  startDate: Date
  endDate: Date
  status: CampaignStatus
  notes?: string
  submittedBy?: string
  submissionDate?: Date
  creatives: Creative[]
  createdAt: Date
  updatedAt: Date
}

export type CampaignStatus = "draft" | "WAITING_FOR_APPROVAL" | "APPROVED" | "REJECTED"

export type CreativeApprovalStatus = "PENDING" | "APPROVED" | "REJECTED"

export interface Creative {
  id: string
  name: string
  notes?: string
  tags: string[]
  approvalStatus: CreativeApprovalStatus
  proofOfPlay: boolean
  fileUrl: string
  fileType: string
  fileSize: number
  width?: number
  height?: number
  duration?: number
  campaignId: string
  createdAt: Date
  updatedAt: Date
}
