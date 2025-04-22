// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
})
