import { createContext, useContext } from "react"

type TimeRange = {
  start: string
  end: string
}

type TimeRangeContextType = {
  timeRange: TimeRange
}

export const TimeRangeContext = createContext<TimeRangeContextType | null>(null)

export const useTimeRange = () => {
  const ctx = useContext(TimeRangeContext)
  if (!ctx) throw new Error("useTimeRange must be used within TimeRangeContext.Provider")
  return ctx
}

