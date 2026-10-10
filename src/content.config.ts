import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const faqsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(99),
  }),
});

const startupsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/startups' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logoText: z.string(),
    website: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    industry: z.string().optional(),
    stage: z.string().optional(),
    founded: z.string().optional(),
    hq: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const storiesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    name: z.string(),
    startup: z.string(),
    avatar: z.string(),
    excerpt: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  faqs: faqsCollection,
  startups: startupsCollection,
  stories: storiesCollection,
};
