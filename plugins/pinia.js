// plugins/pinia.js
import { createPinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia) // قم باستخدام Pinia مع تطبيق Vue
})
