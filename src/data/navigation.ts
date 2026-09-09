/** Primary navigation links shared by the Navbar (and later the Footer). */
export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

/**
 * Where the application lives.
 *
 * The marketing site and the app are deployed separately, so every CTA that
 * leaves this site has to point at an absolute URL. It comes from
 * `VITE_APP_URL` and falls back to the app's local dev server, which keeps
 * `npm run dev` working with no configuration.
 */
export const APP_URL = (import.meta.env.VITE_APP_URL ?? 'http://localhost:5173').replace(/\/$/, '')

/** Marketing CTAs connect into the application. */
export const CREATE_RESUME_HREF = `${APP_URL}/register`
export const LOGIN_HREF = `${APP_URL}/login`
