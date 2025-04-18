<template>
  <section
    ref="sectionRef"
    class="bg-black bg-opacity-90 text-white py-20 relative overflow-hidden"
  >
    <!-- خلفية باهتة + تدرج + لمعة -->
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

    <!-- محتوى المربعات -->
    <div
      class="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700"
      :class="{
        'opacity-100 translate-y-0': inView,
        'opacity-0 translate-y-10': !inView,
      }"
    >
      <FeatureBox icon="bolt" title="Responsive & Retina Ready" />
      <FeatureBox icon="image" title="Video & Images Background" />
      <FeatureBox icon="calendar-alt" title="Calendar and Event Manager" />
      <FeatureBox icon="palette" title="Unlimited Colors Support" />
      <FeatureBox icon="video" title="Parallax Video Background" />
      <FeatureBox icon="cogs" title="Powerful Theme Option" />
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
