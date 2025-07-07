"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
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
import {
  UploadCloud,
  X,
  Eye,
  Info,
  CalendarIcon,
  FileVideo,
  FileImage,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface UploadedFile {
  id: string
  file: File
  name: string
  notes: string
  status: "processing" | "success" | "error"
  preview?: string
}

const ageRanges = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"]

export default function DOOHCMSInterface() {
  const [campaignName, setCampaignName] = useState("")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [gender, setGender] = useState("any")
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([])
  const [validationErrors, setValidationErrors] = useState<string[]>([])


  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleClickUpload = () => {
    fileInputRef.current?.click()
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }

  const handleFiles = (files: File[]) => {
    const errors: string[] = []
    const validFiles: UploadedFile[] = []

    files.forEach((file) => {
      // Validate file type
      const validTypes = ["video/mp4", "image/jpeg", "image/jpg", "image/png"]
      if (!validTypes.includes(file.type)) {
        errors.push(`${file.name}: Invalid file type. Only MP4, JPG, and PNG files are allowed.`)
        return
      }

      // Validate file size (50MB limit)
      if (file.size > 50 * 1024 * 1024) {
        errors.push(`${file.name}: File too large. Maximum size is 50MB.`)
        return
      }

      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        name: file.name.replace(/\.[^/.]+$/, ""),
        notes: "",
        status: "processing",
      }

      // Create preview URL
      if (file.type.startsWith("image/")) {
        newFile.preview = URL.createObjectURL(file)
      }

      validFiles.push(newFile)
    })

    setValidationErrors(errors)
    setUploadedFiles((prev) => [...prev, ...validFiles])

    // Simulate processing
    validFiles.forEach((file) => {
      setTimeout(
        () => {
          setUploadedFiles((prev) =>
            prev.map((f) => (f.id === file.id ? { ...f, status: Math.random() > 0.1 ? "success" : "error" } : f)),
          )
        },
        2000 + Math.random() * 3000,
      )
    })
  }

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => {
      const file = prev.find((f) => f.id === id)
      if (file?.preview) {
        URL.revokeObjectURL(file.preview)
      }
      return prev.filter((f) => f.id !== id)
    })
  }

  const updateFileName = (id: string, name: string) => {
    setUploadedFiles((prev) => prev.map((f) => (f.id === id ? { ...f, name } : f)))
  }

  const updateFileNotes = (id: string, notes: string) => {
    setUploadedFiles((prev) => prev.map((f) => (f.id === id ? { ...f, notes } : f)))
  }

  const toggleAgeRange = (range: string) => {
    setSelectedAgeRanges((prev) => (prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]))
  }

  const getStatusIcon = (status: UploadedFile["status"]) => {
    switch (status) {
      case "processing":
        return <Clock className="w-4 h-4" />
      case "success":
        return <CheckCircle className="w-4 h-4" />
      case "error":
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: UploadedFile["status"]) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "success":
        return "bg-green-100 text-green-800 border-green-200"
      case "error":
        return "bg-red-100 text-red-800 border-red-200"
    }
  }

  const successfulUploads = uploadedFiles.filter((f) => f.status === "success").length

  return (
    <TooltipProvider>
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">DOOH Campaign Manager</h1>
          <p className="text-muted-foreground">Create and manage your digital out-of-home advertising campaigns</p>
        </div>

        {/* Campaign Details */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Details</CardTitle>
            <CardDescription>Set up your campaign parameters and scheduling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground",
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
                      className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
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

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Scheduling is handled automatically using real-time audience data and optimal viewing times.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Creative Assets</CardTitle>
            <CardDescription>Upload your video and image creatives for the campaign</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              className={cn(
                "relative border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer",
                isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25",
                "hover:border-primary/50 hover:bg-primary/5",
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleClickUpload}
            >
              <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <div className="space-y-2">
                <p className="text-lg font-medium">Drop your files here, or click to browse</p>
                <p className="text-sm text-muted-foreground">Supports MP4, JPG, and PNG files up to 50MB each</p>
              </div>
              <div className="absolute inset-0 w-full h-full cursor-pointer">
                <input
                type="file"
                multiple
                accept=".mp4,.jpg,.jpeg,.png"
                onChange={handleFileInput}
                className="hidden"
                ref={fileInputRef}
                />
              </div>
            </div>

            {validationErrors.length > 0 && (
              <div className="space-y-2">
                {validationErrors.map((error, index) => (
                  <Alert key={index} variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            {uploadedFiles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {uploadedFiles.map((file) => (
                  <Card key={file.id} className="relative">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          {file.file.type.startsWith("video/") ? (
                            <FileVideo className="w-5 h-5 text-blue-500" />
                          ) : (
                            <FileImage className="w-5 h-5 text-green-500" />
                          )}
                          <Badge variant="outline" className={cn("text-xs", getStatusColor(file.status))}>
                            {getStatusIcon(file.status)}
                            <span className="ml-1 capitalize">{file.status}</span>
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeFile(file.id)} className="h-6 w-6 p-0">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      {file.preview && (
                        <div className="aspect-video bg-muted rounded-md overflow-hidden">
                          <img
                            src={file.preview || "/placeholder.svg"}
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Input
                          placeholder="Creative name"
                          value={file.name}
                          onChange={(e) => updateFileName(file.id, e.target.value)}
                          className="text-sm"
                        />
                        <Textarea
                          placeholder="Notes or tags (optional)"
                          value={file.notes}
                          onChange={(e) => updateFileNotes(file.id, e.target.value)}
                          className="text-sm min-h-[60px]"
                        />
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{file.name}</DialogTitle>
                          </DialogHeader>
                          <div className="aspect-video bg-black rounded-lg overflow-hidden">
                            {file.file.type.startsWith("video/") ? (
                              <video controls className="w-full h-full" src={URL.createObjectURL(file.file)} />
                            ) : file.preview ? (
                              <img
                                src={file.preview || "/placeholder.svg"}
                                alt={file.name}
                                className="w-full h-full object-contain"
                              />
                            ) : null}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Audience Targeting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Audience Targeting</span>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Used to prioritize screens with matching demographics. Data is anonymized and GDPR-compliant.
                  </p>
                </TooltipContent>
              </Tooltip>
            </CardTitle>
            <CardDescription>Optional demographic targeting to optimize ad placement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Age Ranges</Label>
                <div className="grid grid-cols-2 gap-2">
                  {ageRanges.map((range) => (
                    <div key={range} className="flex items-center space-x-2">
                      <Checkbox
                        id={range}
                        checked={selectedAgeRanges.includes(range)}
                        onCheckedChange={() => toggleAgeRange(range)}
                      />
                      <Label htmlFor={range} className="text-sm font-normal">
                        {range}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campaign Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Summary</CardTitle>
            <CardDescription>Review your campaign before submission</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">Total Creatives</p>
                <p className="text-2xl font-bold text-primary">{successfulUploads}</p>
              </div>
              <div>
                <p className="font-medium">Campaign Duration</p>
                <p className="text-muted-foreground">
                  {startDate && endDate
                    ? `${Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days`
                    : "Not set"}
                </p>
              </div>
              <div>
                <p className="font-medium">Targeting</p>
                <p className="text-muted-foreground">
                  {gender === "any" && selectedAgeRanges.length === 0
                    ? "No targeting"
                    : `${gender !== "any" ? gender : "Any gender"}, ${selectedAgeRanges.length > 0 ? selectedAgeRanges.join(", ") : "All ages"}`}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button
                size="lg"
                className="w-full md:w-auto"
                disabled={!campaignName || !startDate || !endDate || successfulUploads === 0}
              >
                Submit Campaign
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}

