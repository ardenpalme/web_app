"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Plus,
  Trash2,
  Eye,
  CalendarIcon,
  FileVideo,
  AlertCircle,
  CheckCircle,
  Clock,
  FileEdit,
  XCircle,
  Loader2,
  UploadCloud,
  X,
} from "lucide-react"
import { format } from "date-fns"
import { cn, formatDuration, formatBytes } from "@/lib/utils"
import type { CampaignStatus as CampaignStatusEnum, Creative as PrismaCreative } from "@prisma/client"
import { trpc } from "@/lib/trpc"
import { uploadFileToWorker, downloadFileFromWorker } from "@/lib/r2-worker"
import cuid from "cuid"
import { TagInput, PREDEFINED_TAGS } from "@/components/tag-input"

// --- Helper: Preview Dialog ---
const PreviewDialogContent = ({ creative }: { creative: ClientCreative }) => {
  const [objectUrl, setObjectUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!creative.fileUrl) return

    setIsLoading(true)
    setError(null)

    downloadFileFromWorker(creative.fileUrl)
      .then((blob) => {
        const url = URL.createObjectURL(blob)
        setObjectUrl(url)
      })
      .catch(() => setError("Failed to load preview."))
      .finally(() => setIsLoading(false))

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [creative.fileUrl])

  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>{creative.name}</DialogTitle>
      </DialogHeader>
      <div className="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
        {isLoading && <Loader2 className="h-8 w-8 animate-spin text-white" />}
        {error && <p className="text-red-500">{error}</p>}
        {objectUrl &&
          (creative.fileType.startsWith("video/") ? (
            <video controls autoPlay className="w-full h-full" src={objectUrl} />
          ) : (
            <img src={objectUrl || "/placeholder.svg"} alt={creative.name} className="w-full h-full object-contain" />
          ))}
      </div>
    </DialogContent>
  )
}

// --- Helper Components ---
const CampaignStatusBadge = ({ status }: { status: CampaignStatusEnum | null }) => {
  if (!status) return null
  const statusConfig = {
    draft: {
      label: "Draft",
      icon: <FileEdit className="h-3 w-3" />,
      className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    },
    WAITING_FOR_APPROVAL: {
      label: "Waiting for Approval",
      icon: <Clock className="h-3 w-3" />,
      className:
        "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800",
    },
    APPROVED: {
      label: "Approved",
      icon: <CheckCircle className="h-3 w-3" />,
      className:
        "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800",
    },
    REJECTED: {
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

const FormSkeleton = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-72" />
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-72" />
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center text-muted-foreground py-12">
          <Loader2 className="mx-auto h-8 w-8 animate-spin" />
          <p className="mt-2">Loading creative assets...</p>
        </div>
      </CardContent>
    </Card>
  </div>
)

// --- Main Component ---

type ClientCreative = Omit<PrismaCreative, "campaignId"> & {
  uploadStatus?: "uploading" | "success" | "error"
  errorMessage?: string
  file?: File // Temporary holder for the file object during upload
  localPreviewUrl?: string // For instant preview before upload completes
}

export default function DOOHCMSInterface() {
  const [selectedCampaignId, setSelectedCampaignId] = useState("")
  const [campaignName, setCampaignName] = useState("")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [uploadedFiles, setUploadedFiles] = useState<ClientCreative[]>([])
  const [campaignNotes, setCampaignNotes] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const uploadControllers = useRef<Map<string, AbortController>>(new Map())

  // --- tRPC API Calls ---
  const { data: campaignsForSelect, isLoading: isLoadingCampaigns } = trpc.campaign.listForSelect.useQuery()

  const {
    data: campaignData,
    isLoading: isCampaignLoading,
    isError: isCampaignError,
  } = trpc.campaign.getById.useQuery(
    { id: selectedCampaignId },
    {
      enabled: !!selectedCampaignId && selectedCampaignId !== "new-campaign",
    },
  )

  // Effect to populate form when campaign data is fetched
  useEffect(() => {
    if (campaignData) {
      setCampaignName(campaignData.name)
      setStartDate(new Date(campaignData.startDate))
      setEndDate(new Date(campaignData.endDate))
      setCampaignNotes(campaignData.notes || "")
      const creativesFromDb: ClientCreative[] = campaignData.creatives.map((creative) => ({
        ...creative,
        uploadStatus: "success",
      }))
      setUploadedFiles(creativesFromDb)
    }
  }, [campaignData])

  const { mutate: upsertCampaign, isPending: isUpserting } = trpc.campaign.upsert.useMutation({
    onSuccess: () => {
      console.log("Campaign submitted successfully!")
    },
    onError: (error) => {
      console.error("Submission failed:", error)
    },
  })

  const handleSubmit = () => {
    if (!campaignName || !startDate || !endDate) return

    const creativesToSubmit = uploadedFiles
      .filter((f) => f.uploadStatus === "success")
      .map((c) => ({
        id: c.id.startsWith("temp-") ? undefined : c.id,
        name: c.name,
        notes: c.notes,
        tags: c.tags,
        proofOfPlay: c.proofOfPlay,
        fileUrl: c.fileUrl,
        fileType: c.fileType,
        fileSize: c.fileSize,
        width: c.width,
        height: c.height,
        duration: c.duration,
      }))

    const campaignPayload = {
      id: selectedCampaignId === "new-campaign" ? undefined : selectedCampaignId,
      name: campaignName,
      startDate,
      endDate,
      notes: campaignNotes,
      creatives: creativesToSubmit,
    }
    upsertCampaign(campaignPayload)
  }

  // --- Logic & Handlers ---
  const campaignStatus = (() => {
    if (selectedCampaignId === "new-campaign") return "draft"
    if (!selectedCampaignId || !campaignData) return null
    return campaignData?.status || null
  })()

  const resetForm = () => {
    setCampaignName("")
    setStartDate(undefined)
    setEndDate(undefined)
    setUploadedFiles([])
    setCampaignNotes("")
  }

  // Effect to reset form for a new campaign
  useEffect(() => {
    if (selectedCampaignId === "new-campaign") {
      resetForm()
    }
  }, [selectedCampaignId])

  const handleAddAssetsClick = () => {
    fileInputRef.current?.click()
  }

  const getFileMetadata = (
    file: File,
  ): Promise<{ width?: number; height?: number; duration?: number; error?: string }> => {
    return new Promise((resolve) => {
      if (file.type.startsWith("image/")) {
        const img = new Image()
        img.onload = () => {
          resolve({ width: img.naturalWidth, height: img.naturalHeight })
          URL.revokeObjectURL(img.src)
        }
        img.onerror = () => resolve({ error: "Could not load image metadata." })
        img.src = URL.createObjectURL(file)
      } else if (file.type.startsWith("video/")) {
        const video = document.createElement("video")
        video.onloadedmetadata = () => {
          resolve({
            width: video.videoWidth,
            height: video.videoHeight,
            duration: video.duration,
          })
          URL.revokeObjectURL(video.src)
        }
        video.onerror = () => resolve({ error: "Could not load video metadata." })
        video.src = URL.createObjectURL(file)
      } else {
        resolve({})
      }
    })
  }

  const handleFiles = async (files: FileList | File[]) => {
    const filesArray = Array.from(files)
    const newUploads: ClientCreative[] = []

    for (const file of filesArray) {
      const tempId = cuid()
      const fileExtension = file.name.split(".").pop()
      const fileName = `${cuid()}.${fileExtension}`
      const controller = new AbortController()
      uploadControllers.current.set(tempId, controller)

      const placeholder: ClientCreative = {
        id: tempId,
        name: file.name.replace(/\.[^/.]+$/, ""),
        notes: "",
        tags: [],
        approvalStatus: "PENDING",
        proofOfPlay: false,
        localPreviewUrl: URL.createObjectURL(file),
        fileUrl: "",
        fileType: file.type,
        fileSize: file.size,
        width: null,
        height: null,
        duration: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        uploadStatus: "uploading",
        file: file,
      }
      newUploads.push(placeholder)

      uploadFileToWorker(file, fileName, controller.signal)
        .then(async () => {
          const metadata = await getFileMetadata(file)
          setUploadedFiles((prev) =>
            prev.map((f) =>
              f.id === tempId
                ? {
                    ...f,
                    fileUrl: fileName,
                    ...metadata,
                    uploadStatus: "success",
                    file: undefined,
                  }
                : f,
            ),
          )
          uploadControllers.current.delete(tempId)
        })
        .catch((err) => {
          if (err.name === "AbortError") return
          setUploadedFiles((prev) =>
            prev.map((f) =>
              f.id === tempId ? { ...f, uploadStatus: "error", errorMessage: err.message, file: undefined } : f,
            ),
          )
          uploadControllers.current.delete(tempId)
        })
    }
    setUploadedFiles((prev) => [...prev, ...newUploads])
  }

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      await handleFiles(e.target.files)
    }
  }

  const handleDragEvents = (e: React.DragEvent<HTMLDivElement>, type: "enter" | "leave" | "over") => {
    e.preventDefault()
    e.stopPropagation()
    if (type === "enter" || type === "over") {
      setIsDragging(true)
    } else {
      setIsDragging(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const removeFile = (id: string) => {
    const fileToRemove = uploadedFiles.find((f) => f.id === id)
    if (fileToRemove?.localPreviewUrl) {
      URL.revokeObjectURL(fileToRemove.localPreviewUrl)
    }
    if (uploadControllers.current.has(id)) {
      uploadControllers.current.get(id)?.abort()
      uploadControllers.current.delete(id)
    }
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const updateFileDetail = (id: string, key: "name" | "notes", value: string) => {
    setUploadedFiles((prev) => prev.map((f) => (f.id === id ? { ...f, [key]: value } : f)))
  }

  const handleTagChange = (fileId: string, newTags: string[]) => {
    setUploadedFiles((prev) => prev.map((f) => (f.id === fileId ? { ...f, tags: newTags } : f)))
  }

  const handleTagRemove = (fileId: string, tagToRemove: string) => {
    setUploadedFiles((prev) =>
      prev.map((f) => (f.id === fileId ? { ...f, tags: f.tags.filter((t) => t !== tagToRemove) } : f)),
    )
  }

  const toggleProofOfPlay = (id: string) => {
    setUploadedFiles((prev) => prev.map((f) => (f.id === id ? { ...f, proofOfPlay: !f.proofOfPlay } : f)))
  }

  return (
    <TooltipProvider>
      <div className="max-w-6xl p-5 space-y-8">
        {/* Header and Campaign Selector */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-muted-foreground">Create and manage your digital out-of-home advertising campaigns</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full max-w-sm ">
              <Select value={selectedCampaignId} onValueChange={setSelectedCampaignId} disabled={isLoadingCampaigns} >
                <SelectTrigger id="campaign-select" className="w-full cursor-pointer">
                  <SelectValue placeholder={isLoadingCampaigns ? "Loading campaigns..." : "Select a Campaign..."} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-campaign" className="cursor-pointer">Create New Campaign</SelectItem>
                  {(campaignsForSelect || []).map((campaign) => (
                    <SelectItem key={campaign.id} value={campaign.id} className="cursor-pointer">
                      {campaign.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <CampaignStatusBadge status={campaignStatus} />
          </div>
        </div>

        {isCampaignLoading && <FormSkeleton />}

        {isCampaignError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Failed to load campaign data. Please try again.</AlertDescription>
          </Alert>
        )}

        {selectedCampaignId && !isCampaignLoading && !isCampaignError && (
          <div className="space-y-8">
            {/* Campaign Details Card */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
                <CardDescription>Set up your campaign parameters and scheduling.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-name">Campaign Name</Label>
                    <Input
                      id="campaign-name"
                      placeholder="Enter campaign name"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "cursor-pointer w-full justify-start text-left font-normal",
                            !startDate && "cursor-pointer text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "cursor-pointer w-full justify-start text-left font-normal",
                            !endDate && "cursor-pointer text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Creative Assets Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="pb-2">Creative Assets</CardTitle>
                  <CardDescription>Upload and manage your video and image creatives.</CardDescription>
                </div>
                {uploadedFiles.length > 0 && (
                  <Button className="cursor-pointer" onClick={handleAddAssetsClick}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Assets
                  </Button>
                )}
              </CardHeader>
              <CardContent
                className="p-6"
                onDragEnter={(e) => handleDragEvents(e, "enter")}
                onDragLeave={(e) => handleDragEvents(e, "leave")}
                onDragOver={(e) => handleDragEvents(e, "over")}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".mp4,.jpg,.jpeg,.png"
                  onChange={handleFileInput}
                  className="hidden"
                />
                {uploadedFiles.length === 0 ? (
                  <div
                    className={cn(
                      "cursor-pointer flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 p-12 text-center transition-colors",
                      isDragging && "border-primary bg-primary/10",
                    )}
                  >
                    <UploadCloud className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Drag and drop files here</h3>
                    <p className="mt-2 text-sm text-muted-foreground">or</p>
                    <Button variant="outline" className="mt-4 bg-transparent cursor-pointer" onClick={handleAddAssetsClick}>
                      Browse Files
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {uploadedFiles.map((file) => (
                      <Card key={file.id} className="p-4 shadow-sm">
                        <div className="flex flex-col md:flex-row items-start gap-4">
                          <div className="flex-shrink-0 w-full md:w-40 aspect-video bg-muted rounded-md overflow-hidden flex items-center justify-center">
                            {/* Assume that file.fileURL exists */}
                            {file && file.fileType.startsWith("video/") ? (
                                <video
                                  src={`/api/r2/${file.fileUrl}`}
                                  controls={false}
                                  muted
                                  className="w-full h-full object-cover rounded-md"
                                  onMouseOver={(e) => e.currentTarget.play()}
                                  onMouseOut={(e) => e.currentTarget.pause()}
                                />
                              ) : (
                                <img
                                  src={file.fileUrl ? `/api/r2/${file.fileUrl}` : "/placeholder.svg"}
                                  alt={file.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                          </div>
                          <div className="flex-1 space-y-4">
                            <Input
                              placeholder="Creative name"
                              value={file.name}
                              onChange={(e) => updateFileDetail(file.id, "name", e.target.value)}
                              className="text-base font-semibold"
                            />
                            <div className="space-y-2">
                              <TagInput
                                value={file.tags || []}
                                onChange={(newTags) => handleTagChange(file.id, newTags)}
                                autocompleteOptions={PREDEFINED_TAGS}
                                placeholder="Add tags..."
                              />
                              {file.tags && file.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {file.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                      {tag}
                                      <button
                                        type="button"
                                        className="ml-1.5 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                        onClick={() => handleTagRemove(file.id, tag)}
                                      >
                                        <X className="h-3 w-3" />
                                        <span className="sr-only">Remove {tag}</span>
                                      </button>
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            <Textarea
                              placeholder="Add notes for this creative..."
                              value={file.notes ?? ""}
                              onChange={(e) => updateFileDetail(file.id, "notes", e.target.value)}
                              className="text-sm min-h-[60px]"
                            />
                          </div>
                          <div className="w-full md:w-56 space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Status</span>
                              <Badge variant="outline" className="capitalize">
                                {file.uploadStatus === "uploading" && (
                                  <Loader2 className="w-4 h-4 text-yellow-500 animate-spin mr-1.5" />
                                )}
                                {file.uploadStatus === "success" && (
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-1.5" />
                                )}
                                {file.uploadStatus === "error" && (
                                  <AlertCircle className="w-4 h-4 text-red-500 mr-1.5" />
                                )}
                                {file.uploadStatus}
                              </Badge>
                            </div>
                            {file.fileSize && (
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">File Size</span>
                                <span>{formatBytes(file.fileSize)}</span>
                              </div>
                            )}
                            {file.width && file.height && (
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Resolution</span>
                                <span>{`${file.width}x${file.height}`}</span>
                              </div>
                            )}
                            {file.duration && (
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Duration</span>
                                <span>{formatDuration(file.duration)}</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between pt-2 border-t mt-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id={`pop-${file.id}`}
                                  checked={file.proofOfPlay}
                                  className="cursor-pointer"
                                  onCheckedChange={() => toggleProofOfPlay(file.id)}
                                />
                                <Label htmlFor={`pop-${file.id}`} className="text-sm font-medium">
                                  Proof of Play
                                </Label>
                              </div>
                              <div className="flex items-center">
                                <Dialog>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <DialogTrigger asChild>
                                        <Button variant="ghost" size="icon" className="cursor-pointer" disabled={!file.fileUrl}>
                                          <Eye className="h-4 w-4" />
                                        </Button>
                                      </DialogTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Preview</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <PreviewDialogContent creative={file} />
                                </Dialog>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="text-destructive hover:text-destructive cursor-pointer"
                                      onClick={() => removeFile(file.id)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Remove</p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Campaign Notes Card */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Notes</CardTitle>
                <CardDescription>Add any overall notes or instructions for the campaign.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  id="campaign-notes"
                  placeholder="Add any specific instructions or notes for the campaign as a whole..."
                  value={campaignNotes}
                  onChange={(e) => setCampaignNotes(e.target.value)}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
                size="lg"
                onClick={handleSubmit}
                className="cursor-pointer"
                disabled={
                  isUpserting ||
                  !campaignName ||
                  !startDate ||
                  !endDate ||
                  uploadedFiles.some((f) => f.uploadStatus !== "success")
                }
              >
                {isUpserting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isUpserting ? "Submitting..." : "Submit Campaign"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

