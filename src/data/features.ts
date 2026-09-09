import type { ComponentType, SVGProps } from 'react'
import {
  ChatIcon,
  SparkleIcon,
  WandIcon,
  UploadIcon,
  EyeIcon,
  LayoutIcon,
  PencilIcon,
  DownloadIcon,
} from '@/components/ui/icons'

export interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

/** Phase 1 features the marketing site communicates (see CLAUDE.md §5). */
export const features: Feature[] = [
  {
    icon: ChatIcon,
    title: 'Tell your story',
    description:
      'Describe your experience in plain language. No long forms, no field-by-field data entry.',
  },
  {
    icon: SparkleIcon,
    title: 'AI resume generation',
    description:
      'ResumeAI organizes what you wrote into clear, professional resume sections.',
  },
  {
    icon: WandIcon,
    title: 'AI-powered editing',
    description:
      'Ask for changes in your own words — shorten a bullet, add a role, or rephrase a summary.',
  },
  {
    icon: UploadIcon,
    title: 'Upload an existing resume',
    description:
      'Already have a resume? Bring it in and let ResumeAI refresh and reorganize it.',
  },
  {
    icon: EyeIcon,
    title: 'Live resume preview',
    description:
      'See your resume update in real time as you refine the details.',
  },
  {
    icon: LayoutIcon,
    title: 'Professional templates',
    description:
      'Switch between clean, recruiter-friendly templates without losing your content.',
  },
  {
    icon: PencilIcon,
    title: 'Manual editing',
    description:
      'Prefer full control? Edit any section by hand at any time.',
  },
  {
    icon: DownloadIcon,
    title: 'PDF export',
    description:
      'Download a polished, print-ready PDF when your resume is ready to send.',
  },
]
