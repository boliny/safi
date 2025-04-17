<template>
  <div class="app-wrapper">
    <!-- Global Mouse Circle -->
    <div
      class="global-mouse-circle"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    />

    <!-- دي بترندر الصفحة واللاي أوت تلقائي -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function handleMouseMove(e) {
  x.value = e.clientX - 25 // Adjust the circle to center around the mouse
  y.value = e.clientY - 25
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style>
.app-wrapper {
  position: relative;
}

.global-mouse-circle {
  position: fixed;
  top: 0;
  left: 0;
  width: 25px; /* Adjusted size */
  height: 25px; /* Adjusted size */
  background: radial-gradient(
    circle,
    rgba(255, 0, 0, 0.6),
    rgba(0, 0, 0, 0.2)
  ); /* Gradient background */
  border: 2px solid rgba(255, 0, 0, 0.2); /* More pronounced border */
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition:
    transform 0.1s ease-out,
    background 0.3s ease;
  mix-blend-mode: difference;
  transform-origin: center;
}

/* Optional: Hover effect to change the circle's size */
.global-mouse-circle:hover {
  transform: scale(1.2); /* Enlarge the circle on hover */
}
</style>
