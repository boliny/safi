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

/* Mouse Circle */
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

/* Hover Effect */
.global-mouse-circle:hover {
  transform: scale(1.2);
}

/* Hide the circle on mobile */
@media (max-width: 768px) {
  .global-mouse-circle {
    display: none;
  }
}

/* Custom cursor on interactive elements */
a,
button,
.cursor-pointer,
input[type='button'],
input[type='submit'],
label {
  cursor: grab; /* تقدر تغيرها لـ pointer أو custom image */
}
</style>
