<template>
  <div>
    <HeroSection />
    <RegisterSec />
    <FeaturesPage />
    <PlayNow />
    <MyVideo />
    <TestimonialSec />
    <RecentCourse />
    <HelpYou />
    <LatestBlog />
    <StateCounter />
    <SignupSec />
  </div>
</template>

<script setup>
useHead({
  title: 'موقع التدريب',
  meta: [
    { name: 'description', content: 'موقع التدريب' },
    { name: 'keywords', content: 'تدريب, تدريب جيم, تدريب منزلي' },
    { name: 'author', content: 'موقع التدريب' },
    { property: 'og:title', content: 'موقع التدريب' },
    { property: 'og:description', content: 'موقع التدريب' },
    { property: 'og:type', content: 'website' },
  ],
})
definePageMeta({
  pageTransition: {
    name: 'bounce',
    mode: 'out-in', // default
  },
})
</script>
