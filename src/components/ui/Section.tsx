import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  /** Anchor id so the Navbar links can scroll to this section. */
  id?: string
  className?: string
  /** Set false to render children without the inner Container. Default: true. */
  contained?: boolean
  /** Vertical rhythm between sections. Default: 'md'. */
  spacing?: 'sm' | 'md' | 'lg'
}

const spacings = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-24',
  lg: 'py-20 sm:py-28',
}

/**
 * Section — the vertical layout primitive for page bands.
 * Handles consistent spacing and optionally wraps content in a Container.
 */
export function Section({
  children,
  id,
  className,
  contained = true,
  spacing = 'md',
}: SectionProps) {
  return (
    <section id={id} className={cn(spacings[spacing], className)}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
