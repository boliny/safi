// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
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
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        dir: 'ltr', // تحديد اتجاه النص
      },
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.json',
        dir: 'rtl', // تحديد اتجاه النص
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    vueI18n: './i18n/i18n.config.ts',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en',
    },
    bundle: {
      optimizeTranslationDirective: false, // أو true لو حابب تفعلها يدويًا
    },
  },
})
