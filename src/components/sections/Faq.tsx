import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'
import { faqItems } from '@/data/faq'

/**
 * Faq — accessible accordion. Each row is a real <button> that toggles its
 * answer panel with proper aria-expanded / aria-controls wiring.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" className="bg-white">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gradient">answered.</span>
          </>
        }
        description="Everything you might be wondering before you start telling your story."
      />

      <Reveal className="mx-auto mt-14 max-w-3xl">
        <ul className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <li key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-50/50 sm:px-6"
                  >
                    <span className="text-[15px] font-semibold text-ink sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-ink-muted transition-all duration-300',
                        isOpen && 'rotate-45 bg-brand-gradient text-white',
                      )}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-muted sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
