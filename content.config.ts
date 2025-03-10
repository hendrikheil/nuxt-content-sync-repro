import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
      schema: z.object({
        navigation: z.union([
          z.boolean(), // set to allow default of false, should never really be true
          z.enum([
            'header',
            'footer',
          ]),
        ]).default(false),
      }),
    }),

    data: defineCollection({
      type: 'data',
      source: 'data/*.json',
      schema: z.object({
        label: z.string().default('Label'),
        priority: z.number().default(0.2),
        categories: z.array(
          z.string(),
        ).default(['category-a', 'category-b']),
        enabled: z.boolean().default(false),
      }),
    }),
  },
});
