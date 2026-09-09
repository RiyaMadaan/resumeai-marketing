import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { DemoInterface } from '@/components/visuals/DemoInterface'

/**
 * ProductDemo — shows the core promise in action: a natural description on the
 * left becomes a professional resume on the right, with an AI processing state
 * in between. Uses a realistic ResumeAI app mockup (not a stock illustration).
 */
export function ProductDemo() {
  return (
    <Section id="demo" className="bg-brand-gradient-soft">
      <SectionHeading
        eyebrow="Product demo"
        title={
          <>
            See ResumeAI turn your story{' '}
            <span className="text-gradient">into a resume.</span>
          </>
        }
        description="Describe your experience on the left. ResumeAI organizes it into a polished resume on the right — in real time."
      />

      <Reveal className="mx-auto mt-14 max-w-5xl">
        <DemoInterface />
      </Reveal>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-subtle">
        Preview shown for illustration. Always review your generated resume before applying.
      </p>
    </Section>
  )
}
