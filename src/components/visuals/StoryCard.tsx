import { cn } from '@/lib/cn'

/**
 * StoryCard — the "input" half of the hero product visual.
 *
 * Shows how a user talks to ResumeAI: a natural, conversational description
 * of their experience — no form fields. This is real ResumeAI product UI,
 * not a stock illustration.
 */
export function StoryCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-5 shadow-card',
        className,
      )}
    >
      {/* Card header */}
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
          ✦
        </span>
        <p className="text-sm font-semibold text-ink">Tell your story</p>
        <span className="ml-auto text-xs font-medium text-ink-subtle">You</span>
      </div>

      {/* Natural-language input (what the user actually types) */}
      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="text-[13px] leading-relaxed text-ink-muted">
          “I spent about 3 years at{' '}
          <span className="font-medium text-ink">Acme as a marketing lead</span>. I grew the
          email list from 5k to 60k, ran our first paid campaigns, and managed a team of two.
          Before that I freelanced doing social media for small brands.”
        </p>
      </div>

      {/* Typing/assist affordance */}
      <div className="mt-3 flex items-center gap-2 text-xs text-ink-subtle">
        <span className="inline-flex gap-1">
          <span className="h-1.5 w-1.5 animate-sparkle rounded-full bg-brand-400" />
          <span className="h-1.5 w-1.5 animate-sparkle rounded-full bg-brand-400 [animation-delay:200ms]" />
          <span className="h-1.5 w-1.5 animate-sparkle rounded-full bg-brand-400 [animation-delay:400ms]" />
        </span>
        ResumeAI is organizing this into a resume…
      </div>
    </div>
  )
}
