import { Badge } from "@/components/ui/badge"
import type { CampaignStatus, CreativeApprovalStatus } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ThumbsUp, ThumbsDown, CircleDot, FileEdit, XCircle, CheckCircle, Clock } from "lucide-react"

export const CampaignStatusBadge = ({ status }: { status: CampaignStatus }) => {
  const statusConfig = {
    draft: {
      label: "Draft",
      icon: <FileEdit className="h-3 w-3" />,
      className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    },
    "waiting for approval": {
      label: "Waiting for Approval",
      icon: <Clock className="h-3 w-3" />,
      className:
        "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800",
    },
    approved: {
      label: "Approved",
      icon: <CheckCircle className="h-3 w-3" />,
      className:
        "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800",
    },
    rejected: {
      label: "Rejected",
      icon: <XCircle className="h-3 w-3" />,
      className: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800",
    },
  }

  const config = statusConfig[status]

  return (
    <Badge
      variant="outline"
      className={cn("flex items-center gap-1.5 text-xs font-medium px-2.5 py-1", config.className)}
    >
      {config.icon}
      <span>{config.label}</span>
    </Badge>
  )
}

export const CreativeStatusBadge = ({ status }: { status: CreativeApprovalStatus }) => {
  const statusConfig = {
    pending: {
      label: "Pending",
      icon: <CircleDot className="h-3 w-3" />,
      className:
        "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800",
    },
    approved: {
      label: "Approved",
      icon: <ThumbsUp className="h-3 w-3" />,
      className:
        "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800",
    },
    rejected: {
      label: "Rejected",
      icon: <ThumbsDown className="h-3 w-3" />,
      className: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800",
    },
  }

  const config = statusConfig[status]

  return (
    <Badge
      variant="outline"
      className={cn("flex items-center gap-1.5 text-xs font-medium px-2.5 py-1", config.className)}
    >
      {config.icon}
      <span>{config.label}</span>
    </Badge>
  )
}
