import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    pages_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/pages/**',
        prefix: 'de',
      },
      schema: z.object({
        navigation: z.union([
          z.boolean(),
          z.string(),
        ]).default(false),
      }),
    }),

    pages_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/pages/**',
        prefix: 'en',
      },
      schema: z.object({
        navigation: z.union([
          z.boolean(),
          z.string(),
        ]).default(false),
      }),
    }),
  },
});
