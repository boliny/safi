<template>
  <div class="app-wrapper" :class="{ dark: colorMode === 'dark' }">
    <!-- Global Mouse Circle -->
    <div
      class="global-mouse-circle"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    />

    <!-- Apply transition to NuxtPage -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useColorMode } from '@vueuse/core'

// تفعيل الـ colorMode
const colorMode = useColorMode({
  emitAuto: true,
  modes: {
    dark: 'dark',
    light: 'light',
  },
  storageKey: 'vueuse-color-scheme', // تخزين القيمة لتذكر آخر وضع
})

// تحديث الـ class عند التغيير في الـ colorMode
watch(colorMode.value, (newMode) => {
  // إضافة أو إزالة الـ dark class من الـ html أو body
  document.documentElement.classList.toggle('dark', newMode === 'dark')
})

const x = ref(0)
const y = ref(0)

function handleMouseMove(e) {
  x.value = e.clientX - 25
  y.value = e.clientY - 25
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})

// إضافة روابط أو عناصر إلى head (إذا كنت تستخدم Nuxt 3)
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
    },
  ],
})
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
}
.global-mouse-circle {
  position: fixed;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  background: radial-gradient(circle, rgba(255, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
  border: 2px solid rgba(255, 0, 0, 0.2);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease-out, background 0.3s ease;
  mix-blend-mode: difference;
  transform-origin: center;
}

.global-mouse-circle:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .global-mouse-circle {
    display: none;
  }
}
</style>
