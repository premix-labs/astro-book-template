import type { SiteConfig } from './types/site-config';

export const siteConfig = {
  title: 'Astro Technical Book Template',
  shortTitle: 'Book Template',
  tagline: 'Technical book authoring system',
  description: 'Plan, write, verify, and publish practical technical books from one repeatable system.',
  lang: 'en',
  ogImage: '',
  defaultTheme: 'light',
  github: '',
  statusLabel: 'Template ready',
  lastReviewed: 'July 2026',

  footer: {
    text: 'Astro Technical Book Template',
  },
} satisfies SiteConfig;
