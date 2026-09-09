import { StoryCard } from './StoryCard'
import { ResumeCard } from './ResumeCard'

/**
 * HeroVisual — the product story in one glance:
 *   natural description  →  AI  →  professional resume.
 *
 * Composed entirely from ResumeAI's own UI primitives (StoryCard + ResumeCard)
 * so it represents the real product concept — no stock imagery or unrelated
 * screenshots. Stacks vertically on mobile, sits side-by-side on large screens.
 */
export function HeroVisual() {
  return (
    <div className="relative">
      {/* Soft brand glow behind the composition */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-gradient-soft blur-2xl"
      />

      <div className="relative grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <StoryCard className="animate-fade-up" />

        {/* AI processing connector */}
        <div className="flex items-center justify-center lg:flex-col">
          <div className="flex flex-col items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
              <SparkleIcon />
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-wide text-brand-600 lg:block">
              AI
            </span>
          </div>
        </div>

        <ResumeCard className="animate-fade-up [animation-delay:120ms]" />
      </div>
    </div>
  )
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l1.6 4.9L18.5 9.5 13.6 11 12 16l-1.6-5L5.5 9.5l4.9-1.6L12 3z"
        fill="currentColor"
      />
      <path d="M19 4l.7 2 2 .7-2 .7L19 9l-.7-1.6L16.3 6.7l2-.7L19 4z" fill="currentColor" />
    </svg>
  )
}
