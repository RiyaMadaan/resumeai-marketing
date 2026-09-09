import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

/** Pain points with the traditional approach. */
const painPoints = [
  'Endless fields to fill, one box at a time',
  'Repeating the same information over and over',
  'More time spent formatting than actually writing',
  'Staring at a blank page, unsure what to write',
]

/** Steps in each approach, rendered as a simple flow comparison. */
const traditionalFlow = ['Long forms', 'Many fields', 'Fight with formatting', 'Resume']
const resumeAiFlow = ['Tell your story', 'AI organizes it', 'Polished resume']

export function Problem() {
  return (
    <Section id="problem" className="bg-white">
      <SectionHeading
        eyebrow="The problem"
        title={
          <>
            Resume building shouldn't feel like{' '}
            <span className="text-gradient">filling out a tax form.</span>
          </>
        }
        description="Traditional resume builders make you do all the heavy lifting — before you've written a single meaningful word about yourself."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
        {/* Pain points */}
        <Reveal className="rounded-2xl border border-slate-200 bg-slate-50/60 p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-subtle">
            Sound familiar?
          </p>
          <ul className="mt-5 space-y-4">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-ink-subtle">
                  <XIcon />
                </span>
                <span className="text-[15px] leading-relaxed text-ink-muted">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Flow comparison */}
        <Reveal delay={100} className="flex flex-col gap-5">
          <FlowCard tone="muted" label="Traditional resume builder" steps={traditionalFlow} />
          <FlowCard tone="brand" label="ResumeAI" steps={resumeAiFlow} />
        </Reveal>
      </div>
    </Section>
  )
}

function FlowCard({
  tone,
  label,
  steps,
}: {
  tone: 'muted' | 'brand'
  label: string
  steps: string[]
}) {
  const isBrand = tone === 'brand'
  return (
    <div
      className={cn(
        'rounded-2xl border p-6',
        isBrand
          ? 'border-brand-200 bg-brand-gradient-soft shadow-soft'
          : 'border-slate-200 bg-white',
      )}
    >
      <p
        className={cn(
          'text-sm font-semibold',
          isBrand ? 'text-brand-700' : 'text-ink-subtle',
        )}
      >
        {label}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span
              className={cn(
                'rounded-lg px-3 py-1.5 text-sm font-medium',
                isBrand ? 'bg-white text-brand-700 shadow-sm' : 'bg-slate-100 text-ink-muted',
              )}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className={isBrand ? 'text-brand-400' : 'text-slate-300'}>
                <ArrowIcon />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function XIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
