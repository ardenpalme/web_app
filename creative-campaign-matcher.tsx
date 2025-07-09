"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { FileVideo, FileImage, X, Save, Clock, Calendar, Users, CheckCircle } from "lucide-react"

interface Creative {
  id: string
  name: string
  filename: string
  type: "video" | "image"
  duration?: number // in seconds, only for videos
  thumbnail: string
  fileSize: string
  uploadDate: Date
}

interface Campaign {
  id: string
  name: string
  status: "active" | "paused" | "draft"
  startDate: Date
  endDate: Date
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Summer Fashion Collection",
    status: "active",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
  },
  {
    id: "2",
    name: "Tech Product Launch",
    status: "active",
    startDate: new Date("2024-07-15"),
    endDate: new Date("2024-09-15"),
  },
  {
    id: "3",
    name: "Holiday Promotion",
    status: "draft",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    id: "4",
    name: "Local Restaurant Chain",
    status: "paused",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-07-31"),
  },
]

const mockCreatives: Creative[] = [
  {
    id: "c1",
    name: "Summer Dress Showcase",
    filename: "summer_dress_v2.mp4",
    type: "video",
    duration: 30,
    thumbnail: "/placeholder.svg?height=120&width=160&text=Summer+Dress",
    fileSize: "12.5 MB",
    uploadDate: new Date("2024-06-15"),
  },
  {
    id: "c2",
    name: "Tech Hero Banner",
    filename: "tech_hero_banner.jpg",
    type: "image",
    thumbnail: "/placeholder.svg?height=120&width=160&text=Tech+Hero",
    fileSize: "2.1 MB",
    uploadDate: new Date("2024-07-10"),
  },
  {
    id: "c3",
    name: "Holiday Sale Animation",
    filename: "holiday_sale_30s.mp4",
    type: "video",
    duration: 30,
    thumbnail: "/placeholder.svg?height=120&width=160&text=Holiday+Sale",
    fileSize: "18.7 MB",
    uploadDate: new Date("2024-05-20"),
  },
  {
    id: "c4",
    name: "Restaurant Menu Display",
    filename: "menu_display_static.png",
    type: "image",
    thumbnail: "/placeholder.svg?height=120&width=160&text=Menu+Display",
    fileSize: "3.8 MB",
    uploadDate: new Date("2024-04-25"),
  },
  {
    id: "c5",
    name: "Fitness Motivation Video",
    filename: "fitness_motivation_15s.mp4",
    type: "video",
    duration: 15,
    thumbnail: "/placeholder.svg?height=120&width=160&text=Fitness+Video",
    fileSize: "8.9 MB",
    uploadDate: new Date("2024-07-01"),
  },
  {
    id: "c6",
    name: "Product Feature Highlight",
    filename: "product_features.jpg",
    type: "image",
    thumbnail: "/placeholder.svg?height=120&width=160&text=Product+Features",
    fileSize: "1.9 MB",
    uploadDate: new Date("2024-06-30"),
  },
  {
    id: "c7",
    name: "Brand Logo Animation",
    filename: "brand_logo_loop.mp4",
    type: "video",
    duration: 10,
    thumbnail: "/placeholder.svg?height=120&width=160&text=Brand+Logo",
    fileSize: "5.2 MB",
    uploadDate: new Date("2024-07-05"),
  },
  {
    id: "c8",
    name: "Seasonal Promotion Banner",
    filename: "seasonal_promo.png",
    type: "image",
    thumbnail: "/placeholder.svg?height=120&width=160&text=Seasonal+Promo",
    fileSize: "2.7 MB",
    uploadDate: new Date("2024-06-20"),
  },
]

// Mock initial assignments
const initialAssignments: Record<string, string[]> = {
  "1": ["c1", "c8"], // Summer Fashion Collection
  "2": ["c2", "c6", "c7"], // Tech Product Launch
  "3": ["c3"], // Holiday Promotion
  "4": ["c4"], // Local Restaurant Chain
}

export default function CreativeCampaignMatcher() {
  const [selectedCampaign, setSelectedCampaign] = useState<string>("")
  const [assignments, setAssignments] = useState<Record<string, string[]>>(initialAssignments)
  const [selectedCreatives, setSelectedCreatives] = useState<string[]>([])
  const [hasChanges, setHasChanges] = useState(false)

  const currentCampaign = mockCampaigns.find((c) => c.id === selectedCampaign)
  const assignedCreatives = selectedCampaign ? assignments[selectedCampaign] || [] : []
  const availableCreatives = mockCreatives.filter((c) => !assignedCreatives.includes(c.id))

  const handleCampaignSelect = (campaignId: string) => {
    setSelectedCampaign(campaignId)
    setSelectedCreatives([])
  }

  const handleCreativeSelect = (creativeId: string, checked: boolean) => {
    if (checked) {
      setSelectedCreatives((prev) => [...prev, creativeId])
    } else {
      setSelectedCreatives((prev) => prev.filter((id) => id !== creativeId))
    }
  }

  const assignSelectedCreatives = () => {
    if (!selectedCampaign || selectedCreatives.length === 0) return

    setAssignments((prev) => ({
      ...prev,
      [selectedCampaign]: [...(prev[selectedCampaign] || []), ...selectedCreatives],
    }))
    setSelectedCreatives([])
    setHasChanges(true)
  }

  const removeCreativeFromCampaign = (creativeId: string) => {
    if (!selectedCampaign) return

    setAssignments((prev) => ({
      ...prev,
      [selectedCampaign]: (prev[selectedCampaign] || []).filter((id) => id !== creativeId),
    }))
    setHasChanges(true)
  }

  const saveChanges = () => {
    // Here you would typically make an API call to save the assignments
    console.log("Saving assignments:", assignments)
    setHasChanges(false)
    // Show success message or handle response
  }

  const formatDuration = (seconds: number) => {
    return `${seconds}s`
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const getStatusBadgeColor = (status: Campaign["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "paused":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Creative Campaign Matcher</h1>
        <p className="text-muted-foreground">Assign creatives to campaigns and manage your content distribution</p>
      </div>

      {/* Campaign Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Campaign</CardTitle>
          <CardDescription>Choose a campaign to manage its creative assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Campaign</Label>
                <Select value={selectedCampaign} onValueChange={handleCampaignSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a campaign" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCampaigns.map((campaign) => (
                      <SelectItem key={campaign.id} value={campaign.id}>
                        <div className="flex items-center space-x-2">
                          <span>{campaign.name}</span>
                          <Badge variant="outline" className={`text-xs ${getStatusBadgeColor(campaign.status)}`}>
                            {campaign.status}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {currentCampaign && (
                <div className="space-y-2">
                  <Label>Campaign Details</Label>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(currentCampaign.startDate)} - {formatDate(currentCampaign.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{assignedCreatives.length} creatives assigned</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedCampaign && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Creatives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Available Creatives</span>
                <Badge variant="outline">{availableCreatives.length} available</Badge>
              </CardTitle>
              <CardDescription>Select creatives to assign to the campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCreatives.length > 0 && (
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-medium text-blue-900">
                    {selectedCreatives.length} creative{selectedCreatives.length !== 1 ? "s" : ""} selected
                  </span>
                  <Button size="sm" onClick={assignSelectedCreatives}>
                    Assign to Campaign
                  </Button>
                </div>
              )}

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {availableCreatives.map((creative) => (
                  <Card key={creative.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id={creative.id}
                          checked={selectedCreatives.includes(creative.id)}
                          onCheckedChange={(checked) => handleCreativeSelect(creative.id, checked as boolean)}
                        />

                        <div className="flex-shrink-0">
                          <img
                            src={creative.thumbnail || "/placeholder.svg"}
                            alt={creative.name}
                            className="w-20 h-15 object-cover rounded border"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center space-x-2">
                            {creative.type === "video" ? (
                              <FileVideo className="w-4 h-4 text-blue-500" />
                            ) : (
                              <FileImage className="w-4 h-4 text-green-500" />
                            )}
                            <h4 className="font-medium text-sm truncate">{creative.name}</h4>
                          </div>

                          <p className="text-xs text-muted-foreground truncate">{creative.filename}</p>

                          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                            <span>{creative.fileSize}</span>
                            {creative.duration && (
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{formatDuration(creative.duration)}</span>
                              </div>
                            )}
                            <span>Uploaded {formatDate(creative.uploadDate)}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {availableCreatives.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileImage className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>All creatives are assigned to this campaign</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Assigned Creatives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Assigned Creatives</span>
                <Badge variant="outline">{assignedCreatives.length} assigned</Badge>
              </CardTitle>
              <CardDescription>Creatives currently assigned to {currentCampaign?.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {assignedCreatives.map((creativeId) => {
                  const creative = mockCreatives.find((c) => c.id === creativeId)
                  if (!creative) return null

                  return (
                    <Card key={creative.id} className="hover:shadow-sm transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              src={creative.thumbnail || "/placeholder.svg"}
                              alt={creative.name}
                              className="w-20 h-15 object-cover rounded border"
                            />
                          </div>

                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center space-x-2">
                              {creative.type === "video" ? (
                                <FileVideo className="w-4 h-4 text-blue-500" />
                              ) : (
                                <FileImage className="w-4 h-4 text-green-500" />
                              )}
                              <h4 className="font-medium text-sm truncate">{creative.name}</h4>
                            </div>

                            <p className="text-xs text-muted-foreground truncate">{creative.filename}</p>

                            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                              <span>{creative.fileSize}</span>
                              {creative.duration && (
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{formatDuration(creative.duration)}</span>
                                </div>
                              )}
                              <span>Uploaded {formatDate(creative.uploadDate)}</span>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeCreativeFromCampaign(creative.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}

                {assignedCreatives.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No creatives assigned to this campaign yet</p>
                    <p className="text-sm">Select creatives from the left to get started</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Save Changes Button */}
      {selectedCampaign && hasChanges && (
        <div className="flex justify-center pt-4 border-t">
          <Button size="lg" onClick={saveChanges} className="min-w-32">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      )}

      {!selectedCampaign && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center text-muted-foreground">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Select a Campaign</h3>
              <p>Choose a campaign from the dropdown above to start managing creative assignments</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
