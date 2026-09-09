import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'

/** Grouped footer links. Hrefs are placeholders until those pages exist. */
const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Templates', href: '#templates' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Resume tips', href: '#' },
      { label: 'Help center', href: '#' },
      { label: 'Templates gallery', href: '#templates' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookie policy', href: '#' },
    ],
  },
]

const year = 2026

/**
 * Footer — brand blurb, grouped navigation and legal bar.
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand blurb */}
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Don't fill forms. Tell your story. ResumeAI turns the way you naturally describe
              your experience into a polished, professional resume.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-ink-subtle">© {year} ResumeAI. All rights reserved.</p>
          <p className="text-sm text-ink-subtle">Made for job seekers who'd rather tell their story.</p>
        </div>
      </Container>
    </footer>
  )
}
