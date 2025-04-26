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
  title: 'Training Website | Improve Fitness and Home Training',
  meta: [
    {
      name: 'description',
      content:
        'Training website offers the best home and gym training programs for fitness and general health. Discover various exercises to improve strength and well-being.',
    },
    {
      name: 'keywords',
      content:
        'training, gym training, home training, fitness, exercises, strength, health',
    },
    { name: 'author', content: 'Training Website' },
    { property: 'og:title', content: 'Training Website | Improve Fitness' },
    {
      property: 'og:description',
      content:
        'The training website offers comprehensive solutions for fitness through innovative training programs that help you achieve your health goals.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://your-website-url.com' }, // Make sure to update the URL
    { property: 'og:image', content: '/path-to-image/image.jpg' }, // Ensure the featured image is correct
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Training Website | Improve Fitness' },
    {
      name: 'twitter:description',
      content:
        'The training website provides the best fitness solutions through diverse home and gym training exercises.',
    },
    { name: 'twitter:image', content: '/path-to-image/image.jpg' }, // Make sure to update the image path
  ],
})
</script>
