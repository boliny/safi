<template>
  <section
    ref="sectionRef"
    class="relative flex flex-col lg:flex-row bg-red-700 to-red-700 pt-10 lg:px-10 text-white overflow-hidden"
  >
    <!-- Men Text -->
    <div
      class="lg:w-1/4 w-full flex items-center justify-end lg:pr-8 text-right z-10 mb-6 lg:mb-0 px-4"
    >
      <div class="text-left lg:text-right">
        <h2 class="text-3xl font-bold mb-2">MEN CLASS</h2>
        <p class="text-sm mb-2 text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adi sollicitudin.
        </p>
        <p class="text-sm mb-4 text-gray-200">
          Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare
          mi, et mollis tellus neque vitae elit.
        </p>
        <button
          class="border border-white px-5 py-2 rounded-md cursor-pointer hover:bg-white hover:text-red-600 transition duration-300"
        >
          JOIN NOW
        </button>
      </div>
    </div>

    <!-- Center Images -->
    <div
      class="lg:w-1/2 w-full flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-6 lg:mb-0"
    >
      <NuxtImg
        src="/imgs/4.png"
        alt="Man"
        :class="[
          'w-full sm:w-1/2  object-contain sm:object-cover  transition-all duration-1000',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        ]"
      />
      <NuxtImg
        src="/imgs/5.png"
        alt="Woman"
        :class="[
          'w-full sm:w-1/2  object-contain sm:object-cover grayscale   transition-all duration-1000',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        ]"
      />
    </div>

    <!-- Women Text -->
    <div
      class="lg:w-1/4 w-full flex items-center justify-start lg:pl-8 text-left z-10 px-4"
    >
      <div class="text-left">
        <h2 class="text-3xl font-bold mb-2">WOMEN CLASS</h2>
        <p class="text-sm mb-2 text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adi sollicitudin.
        </p>
        <p class="text-sm mb-4 text-gray-200">
          Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare
          mi, et mollis tellus neque vitae elit.
        </p>
        <button
          class="border border-white px-5 py-2 rounded-md cursor-pointer hover:bg-white hover:text-red-600 transition duration-300"
        >
          JOIN NOW
        </button>
      </div>
    </div>
  </section>
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
