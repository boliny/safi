<template>
  <section
    ref="statsSection"
    class="bg-gradient-to-r from-red-700 to-red-800 gap-6 sm:gap-8 grid-cols-auto-fit py-16"
  >
    <div v-for="(stat, index) in stats" :key="index" class="stat">
      <h2 class="text-5xl font-bold text-white">
        {{ Math.round(stat.current) }}
        <span v-if="stat.suffix">{{ stat.suffix }}</span>
      </h2>
      <p class="text-sm font-medium uppercase text-gray-200 mt-2">
        {{ stat.label }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const stats = ref([
  { label: 'Happy Clients', target: 500, current: 0, suffix: '+' },
  { label: 'Online Courses', target: 70, current: 0, suffix: '' },
  { label: 'Satisfaction', target: 100, current: 0, suffix: '%' },
  { label: 'Support', target: 100, current: 0, suffix: '%' },
])

const statsSection = ref(null)
let animationStarted = false

useIntersectionObserver(statsSection, ([{ isIntersecting }]) => {
  if (isIntersecting && !animationStarted) {
    animationStarted = true
    stats.value.forEach((stat) => animateCounter(stat))
  }
})

function animateCounter(stat) {
  const duration = 2000 // مدة التأثير بالمللي ثانية
  const frameRate = 60 // عدد التحديثات في الثانية (استخدام 60 هو الأكثر شيوعًا)
  const totalFrames = (duration / 1000) * frameRate
  let frame = 0

  function updateCounter() {
    frame++
    stat.current = (stat.target * frame) / totalFrames
    if (frame < totalFrames) {
      requestAnimationFrame(updateCounter)
    } else {
      stat.current = stat.target // ضمان أن القيمة تكون صحيحة تمامًا عند النهاية
    }
  }

  updateCounter() // بداية التحريك
}
</script>

<style scoped>
.stat {
  min-width: 150px;
}
.grid-cols-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
}
</style>
