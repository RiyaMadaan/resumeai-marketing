import type { TemplateVariant } from '@/components/visuals/TemplatePreview'

export interface Template {
  variant: TemplateVariant
  name: string
  description: string
}

/** The three resume templates showcased on the marketing site. */
export const templates: Template[] = [
  {
    variant: 'classic',
    name: 'Classic',
    description: 'A timeless, single-column layout that works for any industry.',
  },
  {
    variant: 'modern',
    name: 'Modern',
    description: 'A bold header and accent color for a confident first impression.',
  },
  {
    variant: 'minimal',
    name: 'Minimal',
    description: 'Clean lines and generous whitespace that let your content shine.',
  },
]
