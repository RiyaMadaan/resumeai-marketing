export interface FaqItem {
  question: string
  answer: string
}

/** FAQ content — concise and honest (see CLAUDE.md coding guidelines). */
export const faqItems: FaqItem[] = [
  {
    question: 'Do I need to fill out a long form?',
    answer:
      'No. Instead of filling field after field, you describe your experience in your own words and ResumeAI organizes it into a resume for you.',
  },
  {
    question: 'Can I upload my existing resume?',
    answer:
      'Yes. If you already have a resume, you can bring it in and use it as a starting point to refresh and reorganize.',
  },
  {
    question: 'Can I edit the resume after AI creates it?',
    answer:
      'Absolutely. The generated resume is a starting point — you stay in control and can change anything.',
  },
  {
    question: 'Can I ask AI to change specific sections?',
    answer:
      'Yes. You can ask for targeted changes in plain language, like rewording a bullet or tightening your summary.',
  },
  {
    question: 'Can I edit the resume manually?',
    answer:
      'Yes. You can edit any section by hand at any time if you prefer full control over the wording.',
  },
  {
    question: 'Can I choose different templates?',
    answer:
      'Yes. You can switch between clean, professional templates while keeping the same content.',
  },
  {
    question: 'Can I download my resume as a PDF?',
    answer: 'Yes. When your resume is ready, you can export it as a print-ready PDF.',
  },
  {
    question: 'Does ResumeAI invent information?',
    answer:
      'ResumeAI organizes what you tell it. AI can occasionally phrase things imperfectly, so you should always review the generated resume and make sure every detail is accurate before applying.',
  },
  {
    question: 'Is my resume saved?',
    answer:
      'Yes. ResumeAI is designed to save your resumes so you can come back and update them later.',
  },
  {
    question: 'Is ResumeAI free?',
    answer:
      'You can start creating your resume for free, without committing to a paid plan. More advanced features are planned for the future.',
  },
]
