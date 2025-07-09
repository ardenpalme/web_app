"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CreativeStatusBadge } from "@/components/status-badges"
import type { LibraryCreative } from "@/app/creatives/page"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function CreativeTableView({
  creatives,
  onViewDetails,
}: {
  creatives: LibraryCreative[]
  onViewDetails: (creative: LibraryCreative) => void
}) {
  if (creatives.length === 0) {
    return <div className="text-center text-muted-foreground py-24">No creatives found.</div>
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Preview</TableHead>
            <TableHead>Creative Name</TableHead>
            <TableHead>Campaign</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {creatives.map((creative) => (
            <TableRow key={creative.id}>
              <TableCell>
                <div className="aspect-video w-20 overflow-hidden rounded-md bg-muted">
                  <img
                    src={creative.preview || "/placeholder.svg"}
                    alt={creative.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">{creative.name}</TableCell>
              <TableCell className="text-muted-foreground">{creative.campaignName}</TableCell>
              <TableCell>
                <CreativeStatusBadge status={creative.approvalStatus} />
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => onViewDetails(creative)}>View Details</DropdownMenuItem>
                    <DropdownMenuItem>View Campaign</DropdownMenuItem>
                    <DropdownMenuItem>Download Asset</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
