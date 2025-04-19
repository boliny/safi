<template>
  <aside class="space-y-6">
    <!-- Search Field -->
    <div class="relative">
      <span
        class="absolute inset-y-0 right-3 flex items-center pointer-events-none"
      >
        <!-- Heroicon: Magnifying Glass -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search articles..."
        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
    <!-- Title -->
    <div>
      <h2 class="uppercase text-xl font-semibold tracking-widest">Must Read</h2>
      <div class="w-6 h-0.5 bg-black mt-2" />
    </div>

    <!-- Articles -->
    <div class="space-y-4">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="flex gap-4 items-start cursor-pointer"
        @click="goToItem(post.id)"
      >
        <NuxtImg
          :src="post.thumbnail"
          alt="article image"
          class="w-16 h-16 object-cover"
        />
        <p class="text-sm font-medium leading-snug">
          {{ post.title }}
        </p>
      </div>
    </div>

    <!-- Free Course Ad -->
    <div class="relative cursor-pointer">
      <NuxtImg
        src="https://themes.pixelwars.org/efor/demo-04/wp-content/uploads/sites/6/2019/03/banner2.jpg"
        alt="Free course"
        class="w-full object-cover"
      />
    </div>
  </aside>
</template>

<script setup>
const { data } = await useFetch('https://dummyjson.com/products')
const router = useRouter()
const posts = computed(() => data.value?.products.slice(0, 4) || [])
const goToItem = (id) => router.push(`/blog/${id}`)
</script>
