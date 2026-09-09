import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { CREATE_RESUME_HREF } from '@/data/navigation'

/**
 * FinalCta — the closing conversion moment. A confident, gradient-backed band
 * that restates the promise and drives to "Create My Resume — Free".
 */
export function FinalCta() {
  return (
    <Section spacing="lg" className="bg-white">
      <Reveal className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
        {/* Decorative glow accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-display-sm font-bold tracking-tight text-white sm:text-4xl">
            Your experience is already there. Let's turn it into a resume.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Tell ResumeAI your story and get a professional resume without filling out endless
            forms.
          </p>

          <div className="mt-9 flex justify-center">
            <Button
              as="a"
              href={CREATE_RESUME_HREF}
              size="lg"
              className="bg-white !text-brand-700 shadow-soft hover:!text-brand-800"
            >
              Create My Resume — Free
            </Button>
          </div>

          <p className="mt-5 text-sm text-white/70">No forms to fill · Free to start</p>
        </div>
      </Reveal>
    </Section>
  )
}
