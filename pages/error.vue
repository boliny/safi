<template>
  <div
    class="flex items-center justify-center min-h-screen text-center bg-gray-100"
  >
    <div>
      <h1 class="text-6xl font-bold mb-4 text-red-600">
        {{ error.statusCode }} 
      </h1>
      <p class="text-2xl mb-8">
        {{ error.message || 'Oops! Something went wrong.' }}
      </p>
      <NuxtLink
        to="/"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()
</script>
