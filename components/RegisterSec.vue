<template>
  <section
    ref="sectionRef"
    class="relative flex flex-col lg:flex-row bg-gradient-to-r from-red-700 to-red-800  pt-16 pb-12 lg:px-20 text-white overflow-hidden"
  >
    <!-- Men Text -->
    <div
      class="lg:w-1/4 w-full flex items-center justify-end lg:pr-10 text-right z-10 mb-10 lg:mb-0 px-6"
    >
      <div class="text-left lg:text-right space-y-4">
        <h2 class="text-4xl font-extrabold">MEN CLASS</h2>
        <p class="text-sm text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adi sollicitudin.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed">
          Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare
          mi, et mollis tellus neque vitae elit.
        </p>
        <button
          class="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white cursor-pointer hover:text-red-700 transition duration-300"
          @click="goToRegister"
        >
          JOIN NOW
        </button>
      </div>
    </div>

    <!-- Center Images -->
    <div
      class="lg:w-1/2 w-full flex flex-col sm:flex-row items-center justify-center gap-4 px-6"
    >
      <NuxtImg
        src="/imgs/41.png"
        alt="Man"
        :class="[
          'w-full sm:w-1/2 object-contain h-64 sm:h-96 transition-all duration-1000',
          inView
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-10 opacity-0 scale-90',
        ]"
      />
      <NuxtImg
        src="/imgs/51.png"
        alt="Woman"
        :class="[
          'w-full sm:w-1/2 object-contain h-64 sm:h-96 grayscale transition-all duration-1000 delay-200',
          inView
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-10 opacity-0 scale-90',
        ]"
      />
    </div>

    <!-- Women Text -->
    <div
      class="lg:w-1/4 w-full flex items-center justify-start lg:pl-10 text-left z-10 px-6 mt-10 lg:mt-0"
    >
      <div class="space-y-4">
        <h2 class="text-4xl font-extrabold">WOMEN CLASS</h2>
        <p class="text-sm text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adi sollicitudin.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed">
          Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare
          mi, et mollis tellus neque vitae elit.
        </p>
        <button
          class="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white cursor-pointer hover:text-red-700 transition duration-300"
          @click="goToRegisterWomen"
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

const router = useRouter()
const goToRegister = () => {
  router.push('/register-men')
}
const goToRegisterWomen = () => {
  router.push('/register-women')
}
</script>
