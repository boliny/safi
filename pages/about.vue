<template>
  <section class="bg-gradient-to-b from-white to-gray-100 py-20 px-4 md:px-12">
    <h2 class="text-4xl font-bold text-center mb-16 text-black">
      Coach's Journey
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in journeySteps"
        :key="index"
        class="group relative overflow-hidden rounded-lg shadow-lg transform md:hover:scale-105 transition duration-500 ease-in-out"
      >
        <NuxtImg
          :src="item.img"
          alt="journey step image"
          class="w-full h-[600px] object-cover"
        />

        <div
          class="absolute inset-0 bg-red-600/70 text-white opacity-0 md:group-hover:opacity-100 transition duration-500"
          :class="{ 'opacity-100': isTouchDevice }"
        >
          <div class="flex justify-center items-center h-full text-center px-4">
            <div>
              <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>
              <p class="text-lg">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isTouchDevice = ref(false)

onMounted(() => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
})

const journeySteps = [
  {
    img: '/imgs/8.jpg',
    title: 'Phase 1: Discovery',
    text: 'We start by identifying your goals and the challenges you might face along the way.',
  },
  {
    img: '/imgs/9.jpg',
    title: 'Phase 2: Design',
    text: 'We create a personalized training and nutrition plan tailored to your goals and needs.',
  },
  {
    img: '/imgs/10.jpg',
    title: 'Phase 3: Commitment',
    text: 'We stick to the plan and monitor your progress step by step to achieve the best results.',
  },
  {
    img: '/imgs/11.jpg',
    title: 'Phase 4: Challenges',
    text: 'We face the obstacles and situations that might affect your commitment, offering suitable solutions.',
  },
  {
    img: '/imgs/12.jpg',
    title: 'Phase 5: Improvement',
    text: 'We evaluate your progress and make adjustments to the plan to reach optimal results.',
  },
  {
    img: '/imgs/13.jpg',
    title: 'Phase 6: Success',
    text: 'We celebrate your achievements and plan for the next stage in your ongoing fitness journey.',
  },
]
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
