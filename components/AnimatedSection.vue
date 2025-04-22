<template>
  <v-motion
    v-if="inView"
    ref="sectionRef"
    tag="section"
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
    class="w-full"
  >
    <slot />
  </v-motion>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const inView = ref(false)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      inView.value = entry.isIntersecting
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (sectionRef.value && observer) {
    observer.unobserve(sectionRef.value)
  }
})
</script>
