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

// A custom CommandInput without the search icon
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
    if (!inputValue) {
      setSuggestion("")
      return
    }

    let newSuggestion = ""
    const match = autocompleteOptions.find(
      (tag) => tag.toLowerCase().startsWith(inputValue.toLowerCase()) && !tags.includes(tag),
    )

    if (match) {
      const [key] = match.split(":")
      if (!existingKeys.includes(key) || tags.includes(match)) {
        newSuggestion = match.substring(inputValue.length)
      } else if (existingKeys.includes(key) && !tags.some((t) => t.startsWith(key + ":"))) {
        newSuggestion = match.substring(inputValue.length)
      }
    }
    setSuggestion(newSuggestion)
  }, [inputValue, autocompleteOptions, tags, existingKeys])

  const addTag = (tag: string) => {
    const [key] = tag.split(":")
    const keyAlreadyExists = existingKeys.includes(key)
    const isStandalone = structuredTags[key] === null

    if (tag && autocompleteOptions.includes(tag) && !tags.includes(tag)) {
      if (isStandalone && !keyAlreadyExists) {
        onChange([...tags, tag])
        setInputValue("")
      } else if (!isStandalone && !keyAlreadyExists) {
        onChange([...tags, tag])
        setInputValue("")
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && suggestion) {
      e.preventDefault()
      setInputValue(inputValue + suggestion)
    }

    if (e.key === "Enter") {
      e.preventDefault()
      addTag(inputValue)
    }

    if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      const newTags = [...tags]
      newTags.pop()
      onChange(newTags)
    }

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      const [currentKey, currentValue] = inputValue.split(/:(.*)/s)
      const values = structuredTags[currentKey]

      if (Array.isArray(values) && values.length > 0) {
        e.preventDefault()
        const currentIndex = currentValue ? values.indexOf(currentValue) : -1
        const direction = e.key === "ArrowDown" ? 1 : -1
        const nextIndex = (currentIndex + direction + values.length) % values.length
        setInputValue(`${currentKey}:${values[nextIndex]}`)
      }
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
                <li>Start typing and use `Tab` to autocomplete.</li>
                <li>For categories like 'Age', type 'Age:' then use `↑`/`↓` keys to cycle values.</li>
                <li>Press `Enter` to confirm a valid tag.</li>
              </ul>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

