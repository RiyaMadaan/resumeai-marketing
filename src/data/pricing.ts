/** Simple, honest pricing content. No paid tiers or payment logic (see CLAUDE.md). */

export const freePlan = {
  name: 'Free to start',
  price: '$0',
  tagline: 'Everything you need to build your first resume.',
  cta: 'Create My Resume',
  includes: [
    'Tell your story — no long forms',
    'AI resume generation',
    'AI-powered & manual editing',
    'Live resume preview',
    'Professional templates',
    'PDF export',
  ],
}

/** Future premium features — represented honestly as "coming soon", not sold. */
export const comingSoon = [
  'Advanced templates',
  'Job-description tailoring',
  'More export options',
]
