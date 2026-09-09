import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'brand' | 'neutral' | 'soon'

interface BadgeProps {
  children: ReactNode
  tone?: Tone
  className?: string
}

const tones: Record<Tone, string> = {
  brand: 'bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100',
  neutral: 'bg-slate-100 text-ink-muted ring-1 ring-inset ring-slate-200',
  soon: 'bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200',
}

/**
 * Badge — small pill for labels and eyebrows.
 */
export function Badge({ children, tone = 'brand', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
