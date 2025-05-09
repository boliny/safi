<template>
  <section
    class="py-20 px-4 md:px-12"
    :class="
      colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
    "
  >
    <h2 class="text-4xl font-bold text-center mb-16">Coach's Journey</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in journeySteps"
        :key="index"
        class="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
      >
        <NuxtImg
          :src="item.img"
          alt="journey step image"
          class="w-full h-[600px] object-cover"
          loading="lazy"
        />

        <div
          class="absolute inset-0 bg-red-600/70 text-white opacity-0 group-hover:opacity-100 transition duration-500"
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
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

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
useHead({
  title: "Coach's Journey | Personal Fitness Phases",
  meta: [
    {
      name: 'description',
      content:
        "Explore the phases of a coach's journey with personalized training and nutrition plans. Discover how to overcome challenges and achieve fitness success.",
    },
    {
      name: 'keywords',
      content:
        'coach journey, fitness journey, training phases, personalized fitness, gym training, success, health',
    },
    { name: 'author', content: 'Training Website' },
    {
      property: 'og:title',
      content: "Coach's Journey | Personal Fitness Phases",
    },
    {
      property: 'og:description',
      content:
        'Step through the journey of personalized training with insights into overcoming challenges, improving your fitness, and achieving success.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://your-website-url.com/coachs-journey',
    }, // Update with your actual URL
    { property: 'og:image', content: '/path-to-image/journey-image.jpg' }, // Replace with an actual image
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: "Coach's Journey | Personal Fitness Phases",
    },
    {
      name: 'twitter:description',
      content:
        "Follow the coach's journey with personalized fitness training through various phases and challenges to achieve success.",
    },
    { name: 'twitter:image', content: '/path-to-image/journey-image.jpg' }, // Replace with an actual image URL
  ],
})
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
