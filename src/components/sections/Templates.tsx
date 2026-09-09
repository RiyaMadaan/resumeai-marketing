import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { TemplatePreview } from '@/components/visuals/TemplatePreview'
import { templates } from '@/data/templates'
import { CREATE_RESUME_HREF } from '@/data/navigation'

/**
 * Templates — showcases three realistic resume styles. Content stays the same
 * across templates; only the presentation changes.
 */
export function Templates() {
  return (
    <Section id="templates" className="bg-white">
      <SectionHeading
        eyebrow="Templates"
        title={
          <>
            Make it <span className="text-gradient">yours.</span>
          </>
        }
        description="Choose a clean, professional template that fits your style. Switch anytime — your content comes with you."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, i) => (
          <Reveal
            key={template.variant}
            delay={i * 100}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
          >
            {/* Realistic mini resume preview */}
            <div className="rounded-xl bg-gradient-to-b from-slate-100 to-white p-4 ring-1 ring-slate-100">
              <div className="mx-auto max-w-[220px] transition-transform duration-300 group-hover:scale-[1.02]">
                <TemplatePreview variant={template.variant} />
              </div>
            </div>

            <div className="mt-5 flex flex-1 flex-col">
              <h3 className="text-base font-semibold text-ink">{template.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {template.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button as="a" href={CREATE_RESUME_HREF} size="lg">
          Create My Resume
        </Button>
      </div>
    </Section>
  )
}
