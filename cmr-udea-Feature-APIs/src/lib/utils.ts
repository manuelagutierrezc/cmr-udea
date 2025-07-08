import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// This function solves problems of class conflicts and conditional classes.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// This function capitalizes the first letter of a string and converts the rest to lowercase.
export function Capitalize(text?: string) {
  if (!text) return ""
  return text.toLowerCase().replace(/^\w/, c => c.toUpperCase())
}