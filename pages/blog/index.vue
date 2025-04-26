<template>
  <div
    :class="
      colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
    "
  >
    <div class="container mx-auto px-2 sm:px-4 p-10">
      <!-- Header -->
      <header class="text-center py-6 sm:py-8">
        <h1 class="text-3xl sm:text-4xl font-bold">
          Latest Articles & Stories
        </h1>
      </header>

      <!-- Layout with Sidebar + Content -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
        <!-- Main Content -->
        <div class="space-y-16">
          <!-- Featured Post -->
          <div
            v-if="blogStore.filteredPosts.length"
            class="cursor-pointer"
            @click="goToMain()"
          >
            <div class="relative overflow-hidden rounded-lg group">
              <NuxtImg
                :src="blogStore.filteredPosts[0].image"
                alt="Post Image"
                loading="lazy"
                class="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-500 delay-150 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div
              class="text-xs sm:text-sm mt-2 flex flex-wrap items-center gap-2 justify-center"
            >
              <span><i class="fas fa-calendar-alt mr-1" /> Apr 8, 2025</span>
              <span><i class="fas fa-eye mr-1" /> 980</span>
              <span class="flex items-center space-x-1 cursor-pointer">
                <i class="fas fa-heart text-red-500" /><span>245</span>
              </span>
              <span><i class="fas fa-share-alt mr-1" /> Share</span>
            </div>
            <div class="max-w-2xl mx-auto text-center mt-6 sm:mt-10">
              <p class="text-xs sm:text-sm uppercase tracking-wide">Life</p>
              <h1
                class="text-xl sm:text-3xl font-bold mt-2 hover:text-blue-600 transition"
              >
                {{ blogStore.filteredPosts[0].title }}
              </h1>
              <p class="mt-4 leading-relaxed text-sm sm:text-base">
                People know who they have the potential to be...
              </p>
              <button
                class="mt-4 sm:mt-6 px-4 sm:px-6 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white cursor-pointer transition-all delay-150 text-sm"
                :class="
                  colorMode === 'dark'
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                "
              >
                READ MORE
              </button>
            </div>
          </div>

          <!-- Blog Posts -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              v-for="post in blogStore.filteredPosts.slice(1)"
              :key="post.id"
              class="max-w-full text-center"
            >
              <div
                class="relative overflow-hidden rounded-lg cursor-pointer group"
                @click="goToItem(post.id)"
              >
                <NuxtImg
                  :src="post.image"
                  alt="Post Image"
                  loading="lazy"
                  class="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-500 delay-150 group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p class="text-xs sm:text-sm uppercase tracking-wide mt-2">
                {{ post.category }}
              </p>
              <h1
                class="text-lg sm:text-2xl font-bold mt-2 cursor-pointer hover:text-blue-600 transition-colors"
                @click="goToItem(post.id)"
              >
                {{ post.title }}
              </h1>
              <div
                class="flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm mt-2"
              >
                <span><i class="fas fa-calendar-alt mr-1" /> Apr 8, 2025</span>
                <span><i class="fas fa-eye mr-1" /> {{ post.views }}</span>
                <span
                  class="flex items-center space-x-1 cursor-pointer"
                  @click="blogStore.toggleLike(post.id)"
                >
                  <i
                    class="fas fa-heart transition-colors duration-300"
                    :class="
                      blogStore.likedPosts.includes(post.id)
                        ? 'text-red-500'
                        : 'text-gray-400'
                    "
                  />
                  <span>{{ post.likes }}</span>
                </span>
                <span><i class="fas fa-share-alt mr-1" /> Share</span>
              </div>
              <p class="mt-4 leading-relaxed text-sm sm:text-base">
                {{ post.description }}
              </p>
              <button
                class="mt-4 sm:mt-6 px-4 sm:px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all delay-150 text-sm cursor-pointer"
                :class="
                  colorMode === 'dark'
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                "
                @click="goToItem(post.id)"
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
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useColorMode } from '@vueuse/core'
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue'
import { useBlogsStore } from '@/stores/blogs'

const blogStore = useBlogsStore()

onMounted(() => {
  if (!blogStore.blogs.length) {
    blogStore.fetchBlogs()
  }
})

useHead({
  title: 'Blog | My Website',
  meta: [
    {
      name: 'description',
      content:
        'Latest blog posts and stories in various topics including life, productivity, and more.',
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Blog | My Website' },
    {
      property: 'og:description',
      content: 'Discover helpful and inspiring blog posts.',
    },
    { property: 'og:type', content: 'website' },
  ],
})

const colorMode = useColorMode({
  emitAuto: true,
  modes: {
    dark: 'dark',
    light: 'light',
  },
  storageKey: 'vueuse-color-scheme',
})

const router = useRouter()
const goToItem = (id) => router.push(`/blog/${id}`)
const goToMain = () => router.push(`/blog/${blogStore.filteredPosts[0].id}`)
</script>

<style>
.container {
  max-width: 90%;
}
</style>
