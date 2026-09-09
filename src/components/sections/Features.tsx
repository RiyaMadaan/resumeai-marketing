import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { features } from '@/data/features'

/**
 * Features — the Phase 1 feature grid. Each card pairs a simple line icon
 * with a concise, honest explanation (no unsupported ATS/interview claims).
 */
export function Features() {
  return (
    <Section id="features" className="bg-white">
      <SectionHeading
        eyebrow="Features"
        title={
          <>
            Everything you need.{' '}
            <span className="text-gradient">None of the busywork.</span>
          </>
        }
        description="ResumeAI handles the structure and formatting so you can focus on your story."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <Reveal
              key={feature.title}
              delay={(i % 4) * 80}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon width={22} height={22} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
