import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTimeRange(
  startDate: Date,
  startTime: string, 
  endDate: Date,
  endTime: string     
): { start: string; end: string } {
  const startIso = new Date(`${startDate.toISOString().split("T")[0]}T${startTime}:00Z`).toISOString();
  const endIso = new Date(`${endDate.toISOString().split("T")[0]}T${endTime}:00Z`).toISOString();

  return {
    start: startIso,
    end: endIso,
  };
}
