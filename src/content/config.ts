import { defineCollection, z } from 'astro:content';

const vocabularyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    word: z.string(),
    translation: z.string(),
    category: z.enum(['verbs', 'adjectives', 'nouns', 'adverbs']).optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  }),
});

export const collections = {
  'vocabulary': vocabularyCollection,
};
