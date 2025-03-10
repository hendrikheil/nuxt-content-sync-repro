// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  modules: [
    '@nuxt/content',
  ],

  content: {
    preview: {
      dev: true,
      api: 'https://api.nuxt.studio',
    },
  },
})
