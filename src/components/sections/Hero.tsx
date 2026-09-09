import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { HeroVisual } from '@/components/visuals/HeroVisual'
import { CREATE_RESUME_HREF } from '@/data/navigation'

/** Small reassurance points shown under the hero CTAs. */
const trustPoints = ['No forms to fill', 'Free to start', 'Export to PDF']

/**
 * Hero — the first-impression band. A visitor should understand ResumeAI and
 * want to click "Create My Resume" within seconds. Left: message + CTAs.
 * Right: the product visual (story → AI → resume).
 */
export function Hero() {
  return (
    <Section spacing="lg" className="relative overflow-hidden bg-hero-radial">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.15fr] lg:gap-10">
        {/* Message column */}
        <div className="max-w-xl">
          <Badge tone="brand">
            <span className="animate-sparkle">✦</span> AI-powered resume builder
          </Badge>

          <h1 className="mt-6 text-display-sm sm:text-display lg:text-display-lg text-ink">
            Don't fill forms.{' '}
            <span className="text-gradient">Tell your story.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Describe your experience the way you'd explain it to a friend. ResumeAI turns your
            words into a polished, professional resume — ready to edit, preview, and export.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={CREATE_RESUME_HREF} size="lg">
              Create My Resume
            </Button>
            <Button as="a" href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>

          {/* Reassurance row */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink-muted">
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Product visual column */}
        <div className="lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </Section>
  )
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-brand-500"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
