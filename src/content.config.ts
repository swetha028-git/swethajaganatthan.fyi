import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writings = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string().optional(),
	}),
});

const about = defineCollection({
	loader: glob({ pattern: 'about.md', base: './src/content' }),
	schema: z.object({}),
});

export const collections = { writings, about };
