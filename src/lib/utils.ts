import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))

export const formatDuration = (seconds: number) => {
  const s = Math.floor(seconds)
  return `${s.toString().padStart(2, "0")}s`
}

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
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
