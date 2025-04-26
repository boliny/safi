<!-- pages/error.vue -->
<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen text-center bg-gray-100"
  >
    <h1 class="text-6xl font-bold text-red-600 mb-4">{{ error.statusCode }}</h1>
    <h2 class="text-2xl font-semibold mb-2">
      {{ error.message || 'Something went wrong!' }}
    </h2>
    <p class="text-gray-600 mb-6">
      Please check the URL or go back to the homepage.
    </p>
    <NuxtLink
      to="/"
      class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
    >
      Go Home
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})
</script>

<style scoped>
/* تحسينات بسيطة */
</style>
