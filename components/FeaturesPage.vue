<template>
  <section
    ref="sectionRef"
    class="bg-black bg-opacity-90 text-white py-20 relative overflow-hidden"
  >
    <!-- Background with overlay and shine -->
    <div class="absolute inset-0">
      <NuxtImg
        src="/imgs/6.jpg"
        alt="background"
        class="w-full h-full object-cover opacity-20"
      />
      <div
        class="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-40"
      />
      <div
        class="absolute top-0 left-0 w-full h-full animate-pulse bg-white opacity-5 mix-blend-overlay"
      />
    </div>

    <!-- Feature Boxes -->
    <div
      class="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700"
      :class="{
        'opacity-100 translate-y-0': inView,
        'opacity-0 translate-y-10': !inView,
      }"
    >
      <FeatureBox icon="dumbbell" title="Customized Workout Plans" />
      <FeatureBox icon="utensils" title="Personalized Nutrition Guide" />
      <FeatureBox icon="video" title="HD Training Videos" />
      <FeatureBox icon="comments" title="1-on-1 Live Coaching" />
      <FeatureBox icon="chart-line" title="Progress Tracking" />
      <FeatureBox icon="mobile-alt" title="Train Anytime, Anywhere" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const inView = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) inView.value = true
    },
    { threshold: 0.3 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>
