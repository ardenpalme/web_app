// --- Core Status Enums ---
export type CampaignStatus = "approved" | "waiting for approval" | "rejected" | "draft"
export type CreativeApprovalStatus = "approved" | "rejected" | "pending"
export type CreativeProcessingStatus = "processing" | "success" | "error"

// --- Core Data Structures ---
export interface Creative {
  id: string
  file: File
  name: string
  notes: string
  tags: string[]
  status: CreativeProcessingStatus
  approvalStatus: CreativeApprovalStatus
  proofOfPlay: boolean
  preview?: string
  width?: number
  height?: number
  duration?: number
}

export interface Campaign {
  id: string
  name: string
  startDate: Date
  endDate: Date
  status: CampaignStatus
  creatives: Creative[]
  // Optional fields for different contexts
  submittedBy?: string
  submissionDate?: Date
  notes?: string
}

// --- Performance Dashboard Types ---
export type PerformanceStatus = "Live" | "Ended" | "Approved"

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

export type UploadedFile = {}

