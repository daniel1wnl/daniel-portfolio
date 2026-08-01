import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    type: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    dates: z.string(),
    status: z.string().optional(),
    featured: z.boolean().default(false),
    description: z.string(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    visibility: z.string(),
    dates: z.string(),
    status: z.string(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    description: z.string(),
    impact: z.string().optional(),
    current: z.boolean().default(false),
  }),
});

export const collections = { projects, 'case-studies': caseStudies };
