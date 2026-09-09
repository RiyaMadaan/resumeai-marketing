import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { CheckIcon, PlusIcon } from '@/components/ui/icons'
import { freePlan, comingSoon } from '@/data/pricing'
import { CREATE_RESUME_HREF } from '@/data/navigation'

/**
 * Pricing — intentionally simple. We haven't validated a paid model, so we
 * lead with "Free to start" and note future premium features honestly. No
 * pricing tiers, no payment logic (see CLAUDE.md).
 */
export function Pricing() {
  return (
    <Section id="pricing" className="bg-brand-gradient-soft">
      <SectionHeading
        eyebrow="Pricing"
        title={
          <>
            Start for <span className="text-gradient">free.</span>
          </>
        }
        description="Create your resume without committing to a paid plan. Start telling your story today."
      />

      <Reveal className="mx-auto mt-14 max-w-lg">
        <div className="overflow-hidden rounded-3xl border border-brand-200 bg-white shadow-card">
          {/* Header */}
          <div className="border-b border-slate-100 bg-brand-gradient-soft px-8 py-8 text-center">
            <Badge tone="brand">Free to start</Badge>
            <div className="mt-4 flex items-end justify-center gap-1">
              <span className="text-5xl font-bold tracking-tight text-ink">{freePlan.price}</span>
              <span className="mb-1.5 text-sm font-medium text-ink-subtle">/ to begin</span>
            </div>
            <p className="mt-2 text-sm text-ink-muted">{freePlan.tagline}</p>
          </div>

          {/* Includes */}
          <div className="px-8 py-7">
            <ul className="space-y-3.5">
              {freePlan.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <CheckIcon width={13} height={13} />
                  </span>
                  <span className="text-[15px] text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>

            <Button as="a" href={CREATE_RESUME_HREF} size="lg" className="mt-7 w-full">
              {freePlan.cta}
            </Button>

            {/* Coming soon */}
            <div className="mt-7 border-t border-slate-100 pt-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-subtle">
                <span className="text-accent-500">
                  <PlusIcon width={14} height={14} />
                </span>
                More features coming soon
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {comingSoon.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700 ring-1 ring-inset ring-accent-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
