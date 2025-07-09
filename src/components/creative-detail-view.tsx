import type React from "react"
import type { LibraryCreative } from "@/app/creatives/page"
import { Badge } from "@/components/ui/badge"
import { CreativeStatusBadge } from "./status-badges"
import { FileVideo } from "lucide-react"

// Helper functions
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
const formatDuration = (seconds: number) => {
  const s = Math.floor(seconds)
  return `${s.toString().padStart(2, "0")}s`
}
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

const DetailItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-sm font-medium text-muted-foreground">{label}</p>
    <p className="text-base">{value}</p>
  </div>
)

export function CreativeDetailView({ creative }: { creative: LibraryCreative }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
          {creative.preview ? (
            <img
              src={creative.preview || "/placeholder.svg"}
              alt={creative.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <FileVideo className="h-16 w-16 text-muted-foreground" />
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">Notes</h3>
          <p className="text-sm text-muted-foreground">{creative.notes || "No notes provided."}</p>
        </div>
      </div>
      <div className="space-y-4">
        <DetailItem label="Campaign" value={creative.campaignName} />
        <DetailItem label="Status" value={<CreativeStatusBadge status={creative.approvalStatus} />} />
        <div className="grid grid-cols-2 gap-4">
          {creative.width && creative.height && (
            <>
              <DetailItem label="Resolution" value={`${creative.width} x ${creative.height}`} />
              <DetailItem
                label="Aspect Ratio"
                value={`${creative.width / gcd(creative.width, creative.height)}:${
                  creative.height / gcd(creative.width, creative.height)
                }`}
              />
            </>
          )}
          {creative.duration && <DetailItem label="Duration" value={formatDuration(creative.duration)} />}
          <DetailItem label="File Size" value={formatBytes(creative.file.size)} />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Tags</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {creative.tags.length > 0 ? (
              creative.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No tags.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
