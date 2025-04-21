<template>
  <header>
    <div>
      <!-- زر التبديل بين اللغات -->
      <button @click="toggleLanguage">
        {{ $t('toggleLanguage') }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// دالة لتغيير اللغة
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  locale.value = newLocale

  // تحديث الاتجاه (direction) عند التبديل
  useHead({
    htmlAttrs: {
      dir: newLocale === 'ar' ? 'rtl' : 'ltr',
    },
  })
}
</script>
