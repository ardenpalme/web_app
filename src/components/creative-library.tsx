"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreativeGalleryView } from "./creative-gallery-view"
import { CreativeTableView } from "./creative-table-view"
import { CreativeDetailView } from "./creative-detail-view"
import type { LibraryCreative } from "@/app/creatives/page"
import type { Campaign } from "@/lib/types"
import { LayoutGrid, List } from "lucide-react"

export function CreativeLibrary({ creatives, campaigns }: { creatives: LibraryCreative[]; campaigns: Campaign[] }) {
  const [view, setView] = useState<"gallery" | "table">("gallery")
  const [searchTerm, setSearchTerm] = useState("")
  const [campaignFilter, setCampaignFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedCreative, setSelectedCreative] = useState<LibraryCreative | null>(null)

  const filteredCreatives = useMemo(() => {
    return creatives.filter((creative) => {
      const matchesSearch =
        creative.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        creative.campaignName.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCampaign = campaignFilter === "all" || creative.campaignId === campaignFilter
      const matchesStatus = statusFilter === "all" || creative.approvalStatus === statusFilter
      return matchesSearch && matchesCampaign && matchesStatus
    })
  }, [creatives, searchTerm, campaignFilter, statusFilter])

  const handleViewDetails = (creative: LibraryCreative) => {
    setSelectedCreative(creative)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Creative Library</h1>
          <p className="text-muted-foreground">Browse and manage all creative assets across your campaigns.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={view === "gallery" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("gallery")}
            aria-label="Gallery View"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={view === "table" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("table")}
            aria-label="Table View"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          placeholder="Search by creative or campaign name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-4">
          <Select value={campaignFilter} onValueChange={setCampaignFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Campaigns</SelectItem>
              {campaigns.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        {view === "gallery" ? (
          <CreativeGalleryView creatives={filteredCreatives} onViewDetails={handleViewDetails} />
        ) : (
          <CreativeTableView creatives={filteredCreatives} onViewDetails={handleViewDetails} />
        )}
      </div>

      <Dialog open={!!selectedCreative} onOpenChange={(isOpen) => !isOpen && setSelectedCreative(null)}>
        <DialogContent className="max-w-4xl">
          {selectedCreative && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedCreative.name}</DialogTitle>
              </DialogHeader>
              <CreativeDetailView creative={selectedCreative} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
