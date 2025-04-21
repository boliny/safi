<template>
  <div
    class="app-wrapper"
    :class="{ dark: colorMode === 'dark' }"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <!-- Global Mouse Circle -->
    <div
      class="global-mouse-circle"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    />

    <!-- Render Layout and Page -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useColorMode } from '@vueuse/core'

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

// 🌙 Color Mode
const colorMode = useColorMode()
const { locale } = useI18n()
</script>

<style>
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
  transition:
    transform 0.1s ease-out,
    background 0.3s ease;
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
