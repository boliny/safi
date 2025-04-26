<template>
  <div
    v-if="post"
    :class="
      colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
    "
    class="relative flex flex-col md:flex-row"
  >
    <!-- Main Content -->
    <div class="flex-1 p-4 max-w-4xl mx-auto">
      <h1 class="text-2xl md:text-4xl font-bold text-center mb-6">
        {{ post.title }}
      </h1>

      <NuxtImg
        v-if="post.image"
        :src="post.image"
        alt="Blog image"
        class="w-full rounded-lg mb-6"
        loading="lazy"
      />

      <p class="text-base md:text-lg leading-7 mb-6">{{ post.description }}</p>

      <!-- Social Media Links -->
      <div class="flex space-x-4 justify-center mb-8">
        <a
          href="https://facebook.com"
          target="_blank"
          class="text-blue-600 hover:underline"
          >Facebook</a
        >
        <a
          href="https://twitter.com"
          target="_blank"
          class="text-blue-400 hover:underline"
          >Twitter</a
        >
        <a
          href="https://linkedin.com"
          target="_blank"
          class="text-blue-700 hover:underline"
          >LinkedIn</a
        >
      </div>

      <!-- Navigation Buttons -->
      <div class="flex items-center justify-between mt-10">
        <div v-if="prevPost" class="flex items-center space-x-2">
          <NuxtLink
            :to="`/blog/${prevPost.id}`"
            class="flex items-center bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </NuxtLink>
        </div>
        <div v-if="nextPost" class="flex items-center space-x-2">
          <NuxtLink
            :to="`/blog/${nextPost.id}`"
            class="flex items-center bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
          >
            Next
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Other Products Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div
          v-for="product in otherProducts"
          :key="product.id"
          class="bg-gray-100 p-6 rounded-lg text-center"
        >
          <h3 class="text-xl font-semibold mb-4">{{ product.title }}</h3>
          <NuxtImg
            :src="product.image"
            class="w-full h-48 object-cover rounded mb-4"
            alt="Product image"
          />
          <NuxtLink
            :to="`/blog/${product.id}`"
            class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 inline-block"
          >
            View Post
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <aside class="hidden md:block sticky top-4 w-1/4 p-4">
      <BlogSideBar />
    </aside>
  </div>

  <div v-else class="loading">Post not found.</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogsStore } from '@/stores/blogs'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

const blogStore = useBlogsStore()
const route = useRoute()
const id = parseInt(route.params.id)

const post = computed(() => blogStore.blogs.find((p) => p.id === id))

const currentIndex = computed(() =>
  blogStore.blogs.findIndex((p) => p.id === id)
)

const prevPost = computed(() => blogStore.blogs[currentIndex.value - 1])
const nextPost = computed(() => blogStore.blogs[currentIndex.value + 1])

const otherProducts = computed(() => {
  return blogStore.blogs.filter((p) => p.id !== id).slice(0, 2)
})
</script>

<style scoped>
.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
}

@media (max-width: 400px) {
  p {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
