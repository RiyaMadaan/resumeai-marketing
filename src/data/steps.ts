export interface Step {
  number: string
  title: string
  description: string
}

/** The three-step "How It Works" flow. */
export const steps: Step[] = [
  {
    number: '01',
    title: 'Tell us about yourself',
    description: 'Describe your experience naturally. No long forms.',
  },
  {
    number: '02',
    title: 'AI builds your resume',
    description: 'ResumeAI organizes your experience into professional resume sections.',
  },
  {
    number: '03',
    title: 'Edit, preview & download',
    description:
      'Ask AI for changes, edit manually, choose a template and export your resume.',
  },
]
