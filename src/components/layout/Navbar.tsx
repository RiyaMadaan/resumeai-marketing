import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { navLinks, CREATE_RESUME_HREF, LOGIN_HREF } from '@/data/navigation'

/**
 * Navbar — sticky top navigation.
 * Desktop: logo left, nav links centered/right, auth actions right.
 * Mobile: logo + hamburger that toggles a clean full-width menu.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Subtle elevation once the user scrolls past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-200',
        scrolled || open
          ? 'border-b border-slate-200/80 bg-white/90 backdrop-blur-md'
          : 'border-b border-transparent bg-white/60 backdrop-blur-sm',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Left: logo */}
        <a href="#top" className="flex items-center" aria-label="ResumeAI home">
          <Logo />
        </a>

        {/* Center: desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: desktop auth actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button as="a" href={LOGIN_HREF} variant="ghost" size="md">
            Log in
          </Button>
          <Button as="a" href={CREATE_RESUME_HREF} variant="primary" size="md">
            Create My Resume
          </Button>
        </div>

        {/* Mobile: hamburger toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-brand-50 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon open={open} />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="space-y-1 border-t border-slate-200 bg-white px-5 pb-6 pt-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 flex flex-col gap-2.5">
            <Button as="a" href={LOGIN_HREF} variant="secondary" size="lg" onClick={closeMenu}>
              Log in
            </Button>
            <Button as="a" href={CREATE_RESUME_HREF} variant="primary" size="lg" onClick={closeMenu}>
              Create My Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
