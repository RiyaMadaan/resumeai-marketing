import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Badge } from './Badge'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  /** Small eyebrow label above the title. */
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  /** Text alignment. Default: 'center'. */
  align?: 'center' | 'left'
  className?: string
}

/**
 * SectionHeading — shared heading block for every page section so eyebrows,
 * titles and descriptions stay visually consistent across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <Badge tone="brand" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-display-sm sm:text-4xl font-bold tracking-tight text-ink">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>
      )}
    </Reveal>
  )
}
