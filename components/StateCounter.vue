<template>
  <section
    ref="statsSection"
    class="bg-beige gap-6 sm:gap-8 grid-cols-auto-fit py-16 flex justify-center space-x-10 text-center"
  >
    <div v-for="(stat, index) in stats" :key="index" class="stat">
      <h2 class="text-5xl font-bold">
        {{ Math.round(stat.current)
        }}<span v-if="stat.suffix">{{ stat.suffix }}</span>
      </h2>
      <p class="text-sm font-medium uppercase text-gray-600">
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
  const frameRate = 30 // عدد التحديثات في الثانية
  const totalFrames = (duration / 1000) * frameRate
  let frame = 0

  const interval = setInterval(() => {
    frame++
    stat.current = (stat.target * frame) / totalFrames
    if (frame >= totalFrames) {
      stat.current = stat.target
      clearInterval(interval)
    }
  }, 1000 / frameRate)
}
</script>

<style scoped>
.bg-beige {
  background-color: #f7f1e5;
}
.stat {
  min-width: 150px;
}
.grid-cols-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
}
</style>
