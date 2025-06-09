import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// This function solves problems of class conflicts and conditional classes.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
