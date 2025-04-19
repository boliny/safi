<template>
  <div class="container mx-auto px-2 sm:px-4 p-10">
    <!-- Header -->
    <header class="text-center py-6 sm:py-8">
      <h1 class="text-3xl sm:text-4xl font-bold">BLOG</h1>
    </header>

    <!-- Layout with Sidebar + Content -->
    <div class="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
      <!-- Main Content -->
      <div class="space-y-16">
        <!-- Featured Post -->
        <div
          v-if="filteredPosts.length"
          @click="goToMain()"
          class="cursor-pointer"
        >
          <div class="relative overflow-hidden rounded-lg group">
            <img
              :src="filteredPosts[0].thumbnail"
              alt="Post Image"
              class="w-full h-56 sm:h-64 transition-transform duration-500 delay-150 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div
            class="text-xs sm:text-sm text-gray-500 mt-2 flex flex-wrap items-center gap-2 justify-center"
          >
            <span><i class="fas fa-calendar-alt mr-1"></i> Apr 8, 2025</span>
            <span><i class="fas fa-eye mr-1"></i> 980</span>
            <span class="flex items-center space-x-1 cursor-pointer">
              <i class="fas fa-heart text-red-500"></i><span>245</span>
            </span>
            <span><i class="fas fa-share-alt mr-1"></i> Share</span>
          </div>
          <div class="max-w-2xl mx-auto text-center mt-6 sm:mt-10">
            <p class="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
              Life
            </p>
            <h1
              class="text-xl sm:text-3xl font-bold mt-2 hover:text-blue-600 transition"
            >
              {{ filteredPosts[0].title }}
            </h1>
            <p class="text-gray-700 mt-4 leading-relaxed text-sm sm:text-base">
              People know who they have the potential to be...
            </p>
            <button
              class="mt-4 sm:mt-6 px-4 sm:px-6 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white cursor-pointer transition-all delay-150 text-sm"
            >
              READ MORE
            </button>
          </div>
        </div>

        <!-- Blog Posts -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div
            v-for="post in filteredPosts.slice(1)"
            :key="post.id"
            class="max-w-full text-center"
          >
            <div
              @click="goToItem(post.id)"
              class="relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                :src="post.thumbnail"
                alt="Post Image"
                class="w-full h-40 sm:h-48 object-cover transition-transform duration-500 delay-150 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <p
              class="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mt-2"
            >
              {{ post.category }}
            </p>
            <h1
              @click="goToItem(post.id)"
              class="text-lg sm:text-2xl font-bold mt-2 cursor-pointer hover:text-blue-600 transition-colors"
            >
              {{ post.title }}
            </h1>
            <div
              class="flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm text-gray-500 mt-2"
            >
              <span><i class="fas fa-calendar-alt mr-1"></i> Apr 8, 2025</span>
              <span><i class="fas fa-eye mr-1"></i> {{ post.views }}</span>
              <span
                class="flex items-center space-x-1 cursor-pointer"
                @click="toggleLike(post.id)"
              >
                <i
                  class="fas fa-heart transition-colors duration-300"
                  :class="
                    likedPosts.includes(post.id)
                      ? 'text-red-500'
                      : 'text-gray-400'
                  "
                ></i>
                <span>{{ post.likes }}</span>
              </span>
              <span><i class="fas fa-share-alt mr-1"></i> Share</span>
            </div>
            <p class="text-gray-700 mt-4 leading-relaxed text-sm sm:text-base">
              {{ post.description }}
            </p>
            <button
              @click="goToItem(post.id)"
              class="mt-4 sm:mt-6 px-4 sm:px-6 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition-all delay-150 text-sm cursor-pointer"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="md:sticky md:top-8 md:self-start h-fit">
        <BlogSideBar />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const { data } = await useFetch('https://dummyjson.com/products')
const posts = ref([])
const likedPosts = ref([])

onMounted(() => {
  posts.value = data.value.products.map((post) => ({
    ...post,
    views: getRandomViews(),
    likes: getRandomLikes(),
  }))
})

const filteredPosts = computed(() => posts.value.filter(Boolean))
const getRandomViews = () => Math.floor(Math.random() * 1000 + 100)
const getRandomLikes = () => Math.floor(Math.random() * 300 + 20)

const toggleLike = (postId) => {
  const index = posts.value.findIndex((p) => p.id === postId)
  if (likedPosts.value.includes(postId)) {
    posts.value[index].likes--
    likedPosts.value = likedPosts.value.filter((id) => id !== postId)
  } else {
    posts.value[index].likes++
    likedPosts.value.push(postId)
  }
}

const router = useRouter()
const goToItem = (id) => router.push(`/blog/${id}`)
const goToMain = () => router.push(`/blog/${filteredPosts.value[0].id}`)
</script>

<style>
.container {
  max-width: 90%;
}
</style>
