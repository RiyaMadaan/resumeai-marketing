import { cn } from '@/lib/cn'

export type TemplateVariant = 'classic' | 'modern' | 'minimal'

/** A faint text line used to abstract body copy in the mini previews. */
function Line({ w = 'w-full' }: { w?: string }) {
  return <span className={cn('block h-1.5 rounded-full bg-slate-200', w)} />
}

/**
 * TemplatePreview — a realistic, scaled-down resume rendered in one of three
 * styles. These use ResumeAI's own layout language (not screenshots) so the
 * Templates section shows genuine, professional-looking options.
 */
export function TemplatePreview({ variant }: { variant: TemplateVariant }) {
  return (
    <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-white p-4 text-[8px] leading-none shadow-sm ring-1 ring-slate-100">
      {variant === 'classic' && <Classic />}
      {variant === 'modern' && <Modern />}
      {variant === 'minimal' && <Minimal />}
    </div>
  )
}

function SectionBlock({
  label,
  labelClass,
  lines = ['w-full', 'w-11/12', 'w-4/5'],
}: {
  label: string
  labelClass?: string
  lines?: string[]
}) {
  return (
    <div className="space-y-1.5">
      <p className={cn('text-[7px] font-bold uppercase tracking-wide', labelClass)}>{label}</p>
      <div className="space-y-1">
        {lines.map((w, i) => (
          <Line key={i} w={w} />
        ))}
      </div>
    </div>
  )
}

/** Classic — centered header, traditional single column. */
function Classic() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="border-b border-slate-300 pb-2 text-center">
        <p className="text-[11px] font-bold text-ink">Jordan Rivera</p>
        <p className="mt-0.5 text-[7px] text-ink-subtle">Marketing Lead</p>
      </div>
      <SectionBlock label="Experience" labelClass="text-ink" />
      <SectionBlock label="Education" labelClass="text-ink" lines={['w-full', 'w-3/4']} />
      <SectionBlock label="Skills" labelClass="text-ink" lines={['w-5/6']} />
    </div>
  )
}

/** Modern — gradient header band with an accent color. */
function Modern() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="-mx-4 -mt-4 bg-brand-gradient px-4 py-3">
        <p className="text-[11px] font-bold text-white">Jordan Rivera</p>
        <p className="mt-0.5 text-[7px] text-white/85">Marketing Lead</p>
      </div>
      <SectionBlock label="Experience" labelClass="text-brand-600" />
      <SectionBlock label="Projects" labelClass="text-brand-600" lines={['w-full', 'w-2/3']} />
      <div className="space-y-1.5">
        <p className="text-[7px] font-bold uppercase tracking-wide text-brand-600">Skills</p>
        <div className="flex flex-wrap gap-1">
          {['w-8', 'w-10', 'w-7', 'w-9'].map((w, i) => (
            <span key={i} className={cn('h-2 rounded-full bg-brand-100', w)} />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Minimal — lots of whitespace, thin rules, understated. */
function Minimal() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <p className="text-[11px] font-semibold tracking-tight text-ink">Jordan Rivera</p>
        <div className="mt-1 h-px w-8 bg-brand-400" />
      </div>
      <SectionBlock label="Experience" labelClass="text-ink-subtle" lines={['w-full', 'w-4/5']} />
      <SectionBlock label="Education" labelClass="text-ink-subtle" lines={['w-3/4']} />
      <SectionBlock label="Skills" labelClass="text-ink-subtle" lines={['w-2/3']} />
    </div>
  )
}
