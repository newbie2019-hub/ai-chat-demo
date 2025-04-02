import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DRAG_STATE = {
  ON_DRAG_ENTER: 'drag-enter',
  ON_DRAG_OVER: 'drag-over',
  ON_DRAG_LEAVE: 'drag-leave',
  ON_DROP: 'on-drop',
} as const
