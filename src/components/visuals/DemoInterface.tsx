import { cn } from '@/lib/cn'

/**
 * DemoInterface — a realistic ResumeAI app mockup for the Product Demo section.
 *
 * Framed in app-window chrome. Left: a conversation panel where the user
 * describes their experience and the AI shows a "building" state. Right: the
 * resume that results. This is ResumeAI's own interface language — not a
 * generic illustration or a screenshot of another product.
 */
export function DemoInterface() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </span>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-ink-subtle ring-1 ring-slate-200">
          <span className="text-brand-500">✦</span> app.resumeai.com
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <ConversationPanel />
        <ResumePanel />
      </div>
    </div>
  )
}

function ConversationPanel() {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 p-6 md:border-b-0 md:border-r">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">
        Your story
      </p>

      {/* User message */}
      <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-brand-gradient px-4 py-3 text-[13px] leading-relaxed text-white shadow-soft">
        “I've been working as a frontend developer for 2 years. I work mainly with React,
        TypeScript and Angular. Before this I worked at a startup building internal dashboards
        and helped ship our design system.”
      </div>

      {/* AI processing state */}
      <div className="mr-auto flex max-w-[92%] items-center gap-3 rounded-2xl rounded-tl-sm bg-slate-50 px-4 py-3 ring-1 ring-slate-100">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-xs text-white">
          ✦
        </span>
        <div className="flex items-center gap-2 text-[13px] font-medium text-ink-muted">
          Building your resume
          <span className="flex gap-1">
            <Dot />
            <Dot delay="150ms" />
            <Dot delay="300ms" />
          </span>
        </div>
      </div>

      {/* Input affordance (non-functional — marketing mockup) */}
      <div className="mt-auto flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
        <span className="text-[13px] text-ink-subtle">Add more about your experience…</span>
        <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

function ResumePanel() {
  return (
    <div className="bg-slate-50/50 p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-subtle">
        Live preview
      </p>

      <div className="animate-fade-up overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
        <div className="bg-brand-gradient px-5 py-4 text-white">
          <p className="text-sm font-bold leading-tight">Alex Chen</p>
          <p className="mt-0.5 text-[11px] text-white/85">Frontend Developer</p>
        </div>

        <div className="space-y-4 px-5 py-4">
          <ResumeSection label="Summary">
            <TextLine w="w-full" />
            <TextLine w="w-11/12" />
          </ResumeSection>

          <div>
            <SectionLabel>Experience</SectionLabel>
            <div className="mt-2 space-y-2.5">
              <ExperienceRow role="Frontend Developer" meta="2 yrs" />
              <ExperienceRow role="Startup — Dashboards" meta="Prior" />
            </div>
          </div>

          <div>
            <SectionLabel>Skills</SectionLabel>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {['React', 'TypeScript', 'Angular', 'Design Systems'].map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-brand-50 px-2 py-1 text-[10px] font-medium text-brand-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumeSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-2 space-y-1.5">{children}</div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-wide text-brand-600">{children}</p>
  )
}

function ExperienceRow({ role, meta }: { role: string; meta: string }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-semibold text-ink">{role}</p>
        <p className="text-[10px] text-ink-subtle">{meta}</p>
      </div>
      <div className="mt-1.5 space-y-1">
        <TextLine w="w-full" />
        <TextLine w="w-4/5" />
      </div>
    </div>
  )
}

function TextLine({ w }: { w: string }) {
  return <span className={cn('block h-1.5 rounded-full bg-slate-200', w)} />
}

function Dot({ delay = '0ms' }: { delay?: string }) {
  return (
    <span
      className="h-1.5 w-1.5 animate-sparkle rounded-full bg-brand-400"
      style={{ animationDelay: delay }}
    />
  )
}
