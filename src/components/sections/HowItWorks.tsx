import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { steps } from '@/data/steps'

/**
 * HowItWorks — the three-step journey from story to resume.
 * Numbered cards with a connecting line on desktop.
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-brand-gradient-soft">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            From your story to a resume{' '}
            <span className="text-gradient">in minutes.</span>
          </>
        }
        description="Three simple steps — no formatting headaches, no blank-page paralysis."
      />

      <div className="relative mt-14 grid gap-6 md:grid-cols-3">
        {/* Connecting line (desktop) */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 md:block"
        />

        {steps.map((step, i) => (
          <Reveal
            key={step.number}
            delay={i * 120}
            className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-lg font-bold text-white shadow-glow">
              {step.number}
            </span>
            <h3 className="mt-6 text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
