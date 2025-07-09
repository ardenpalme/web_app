"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

export const PREDEFINED_TAGS = [
  "Sale",
  "Promotion",
  "Summer",
  "Winter",
  "Holiday",
  "New Product",
  "Brand Awareness",
  "Local Event",
  "Grand Opening",
  "Limited Time Offer",
  "Automotive",
  "Fashion",
  "Food & Beverage",
  "Technology",
  "Entertainment",
  "Real Estate",
  "Healthcare",
  "Finance",
  "Travel",
  "Retail",
  "Age:18-24",
  "Age:25-34",
  "Age:35-44",
  "Age:45-54",
  "Age:55+",
  "Gender:Male",
  "Gender:Female",
  "Gender:All",
  "Location:Urban",
  "Location:Suburban",
  "Location:Rural",
  "Time:Morning",
  "Time:Afternoon",
  "Time:Evening",
  "Time:LateNight",
]

const CustomCommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Input
    ref={ref}
    className={cn(
      "bg-transparent outline-none placeholder:text-muted-foreground border-none p-0 focus:ring-0 h-full w-full",
      className,
    )}
    {...props}
  />
))
CustomCommandInput.displayName = "CommandInput"

interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: string[]
  onChange: (value: string[]) => void
  autocompleteOptions: string[]
}

export function TagInput({
  value: tags,
  onChange,
  autocompleteOptions,
  placeholder,
  className,
  ...props
}: TagInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = React.useState("")
  const [suggestion, setSuggestion] = React.useState("")

  const structuredTags = React.useMemo(() => {
    const result: Record<string, string[] | null> = {}
    autocompleteOptions.forEach((tag) => {
      const [key, value] = tag.split(/:(.*)/s)
      if (value !== undefined) {
        if (!result[key]) result[key] = []
        ;(result[key] as string[]).push(value)
      } else {
        result[key] = null
      }
    })
    return result
  }, [autocompleteOptions])

  const existingKeys = React.useMemo(() => tags.map((tag) => tag.split(":")[0]), [tags])

  React.useEffect(() => {
    const activeSegment = inputValue.split(",").pop()?.trim() ?? ""
    if (!activeSegment) {
      setSuggestion("")
      return
    }

    const [currentKey, currentValue] = activeSegment.split(/:(.*)/s)
    let newSuggestion = ""

    const keyAlreadyUsed = existingKeys.includes(currentKey)
    if (keyAlreadyUsed && structuredTags[currentKey] !== null) {
      setSuggestion("")
      return
    }

    const match = autocompleteOptions.find(
      (tag) => tag.toLowerCase().startsWith(activeSegment.toLowerCase()) && !tags.includes(tag),
    )

    if (match) {
      const matchKey = match.split(":")[0]
      if (!existingKeys.includes(matchKey) || matchKey === currentKey) {
        newSuggestion = match.substring(activeSegment.length)
      }
    }
    setSuggestion(newSuggestion)
  }, [inputValue, autocompleteOptions, tags, existingKeys, structuredTags])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const activeSegment = inputValue.split(",").pop()?.trim() ?? ""

    if (e.key === "Tab" && suggestion) {
      e.preventDefault()
      const parts = inputValue.split(",")
      parts[parts.length - 1] = activeSegment + suggestion
      setInputValue(parts.join(","))
    }

    if (e.key === "Enter") {
      e.preventDefault()
      const newEntries = inputValue
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
      if (newEntries.length === 0) return

      const currentTags = new Set(tags)
      const currentKeys = new Set(tags.map((t) => t.split(":")[0]))
      const tagsToAdd: string[] = []

      for (const entry of newEntries) {
        const entryKey = entry.split(":")[0]
        const isValidOption = autocompleteOptions.includes(entry)
        const isNewTag = !currentTags.has(entry)
        const isKeyAvailable = !currentKeys.has(entryKey)

        if (isValidOption && isNewTag && isKeyAvailable) {
          tagsToAdd.push(entry)
          currentTags.add(entry)
          currentKeys.add(entryKey)
        }
      }

      if (tagsToAdd.length > 0) {
        onChange([...tags, ...tagsToAdd])
      }
      setInputValue("")
    }

    if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      const newTags = [...tags]
      newTags.pop()
      onChange(newTags)
    }

    const [currentKey, currentValue] = activeSegment.split(/:(.*)/s)
    const values = structuredTags[currentKey]
    if (Array.isArray(values) && values.length > 0 && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      e.preventDefault()
      const currentIndex = currentValue ? values.indexOf(currentValue) : -1
      const direction = e.key === "ArrowDown" ? 1 : -1
      const nextIndex = (currentIndex + direction + values.length) % values.length

      const parts = inputValue.split(",")
      parts[parts.length - 1] = `${currentKey}:${values[nextIndex]}`
      setInputValue(parts.join(","))
    }
  }

  return (
    <TooltipProvider delayDuration={200}>
      <div
        className={cn(
          "flex items-center rounded-md border border-input p-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          className,
        )}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="relative flex-1 min-w-[120px]">
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <span className="text-transparent">{inputValue}</span>
            <span className="text-muted-foreground">{suggestion}</span>
          </div>
          <CommandPrimitive className="bg-transparent p-0 h-auto">
            <CustomCommandInput
              ref={inputRef}
              placeholder={placeholder}
              value={inputValue}
              onValueChange={setInputValue}
              onKeyDown={handleKeyDown}
              {...props}
            />
          </CommandPrimitive>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-4 w-4 text-muted-foreground cursor-pointer ml-2 flex-shrink-0" />
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-sm p-1">
              <p className="font-semibold">How to add tags:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Type to get suggestions, use `Tab` to complete.</li>
                <li>Enter multiple tags separated by commas.</li>
                <li>Cycle through options with up/down arrows</li>
                <li>Press `Enter` to add all valid tags.</li>
              </ul>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

