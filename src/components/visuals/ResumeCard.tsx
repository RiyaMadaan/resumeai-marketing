import { cn } from '@/lib/cn'

/** A single formatted experience bullet in the mock resume. */
function Bullet({ children, width }: { children: string; width: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
      <span className={cn('block h-2 rounded-full bg-slate-200', width)} aria-hidden />
      <span className="sr-only">{children}</span>
    </li>
  )
}

/**
 * ResumeCard — the "output" half of the hero product visual.
 *
 * A clean, professional resume rendered from the natural story in StoryCard.
 * Uses ResumeAI's own layout language (not a screenshot of another product),
 * with abstracted body lines so it reads as a polished document at a glance.
 */
export function ResumeCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift',
        className,
      )}
    >
      {/* Resume header band */}
      <div className="bg-brand-gradient px-6 py-5 text-white">
        <p className="text-base font-bold leading-tight">Jordan Rivera</p>
        <p className="mt-0.5 text-xs font-medium text-white/85">
          Marketing Lead · Growth &amp; Lifecycle
        </p>
      </div>

      <div className="space-y-5 px-6 py-5">
        {/* Experience */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600">
            Experience
          </p>
          <div className="mt-3 space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Marketing Lead — Acme</p>
                <p className="text-[11px] text-ink-subtle">2021 – 2024</p>
              </div>
              <ul className="mt-2 space-y-2">
                <Bullet width="w-full">
                  Grew email subscriber base from 5,000 to 60,000 in under two years.
                </Bullet>
                <Bullet width="w-4/5">
                  Launched and scaled the company's first paid acquisition campaigns.
                </Bullet>
                <Bullet width="w-11/12">
                  Managed and mentored a two-person marketing team.
                </Bullet>
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Freelance Social Media</p>
                <p className="text-[11px] text-ink-subtle">2019 – 2021</p>
              </div>
              <ul className="mt-2 space-y-2">
                <Bullet width="w-10/12">
                  Ran social media for a portfolio of small consumer brands.
                </Bullet>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600">Skills</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {['Email Marketing', 'Paid Acquisition', 'Team Leadership', 'Analytics'].map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-medium text-brand-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
