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

      <!-- Filter By Category -->
      <div class="text-center mb-8">
        <select
          v-model="selectedCategory"
          class="px-4 py-2 border rounded-md"
          :class="
            colorMode === 'dark'
              ? 'bg-gray-900 text-white'
              : 'bg-white text-black'
          "
        >
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Layout with Sidebar + Content -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
        <!-- Main Content -->
        <div class="space-y-16">
          <!-- Featured Post -->
          <div v-if="blogStore.filteredPosts.length" class="cursor-pointer">
            <div
              class="relative overflow-hidden rounded-lg group"
              @click="goToMain()"
            >
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
              <div>
                <!-- Share -->
                <div class="relative group cursor-pointer">
                  <div
                    class="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition"
                  >
                    <i class="fas fa-share-alt mr-1" />
                    <span>Share</span>
                  </div>
                  <div
                    class="absolute top-8 left-1/2 -translate-x-1/2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-20"
                  >
                    <ul
                      class="flex flex-col text-sm text-gray-700 dark:text-gray-200"
                    >
                      <li v-for="(link, i) in socialLinks" :key="i">
                        <a
                          :href="link.href"
                          target="_blank"
                          class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <i :class="link.icon + ' mr-2 ' + link.color" />
                          {{ link.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="max-w-2xl mx-auto text-center mt-6 sm:mt-10">
              <p class="text-xs sm:text-sm uppercase tracking-wide">Life</p>
              <h1
                class="text-xl sm:text-3xl font-bold mt-2 hover:text-blue-600 transition"
                @click="goToMain()"
              >
                {{ blogStore.filteredPosts[0].title }}
              </h1>
              <p class="mt-4 leading-relaxed text-sm sm:text-base">
                People know who they have the potential to be...
              </p>
              <!-- زر READ MORE الرئيسي -->
              <button
                class="mt-4 cursor-pointer sm:mt-6 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform border hover:scale-105 active:scale-95 shadow-sm hover:shadow-md dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white border-black bg-black text-white hover:bg-white hover:text-black"
                @click="goToMain()"
              >
                READ MORE
              </button>
            </div>
          </div>

          <!-- Blog Posts -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              v-for="post in filteredPosts"
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
                  @click="toggleLike(post.id)"
                >
                  <i
                    class="fas fa-heart transition-colors duration-300"
                    :class="{
                      'text-red-500': likedPosts.includes(post.id),
                      'text-gray-400': !likedPosts.includes(post.id),
                    }"
                  />
                  <span>{{ post.likes }}</span>
                </span>
                <!-- Share -->
                <div class="relative group cursor-pointer">
                  <div
                    class="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition"
                  >
                    <i class="fas fa-share-alt mr-1" />
                    <span>Share</span>
                  </div>
                  <div
                    class="absolute top-8 left-1/2 -translate-x-1/2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-20"
                  >
                    <ul
                      class="flex flex-col text-sm text-gray-700 dark:text-gray-200"
                    >
                      <li v-for="(link, i) in socialLinks" :key="i">
                        <a
                          :href="link.href"
                          target="_blank"
                          class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <i :class="link.icon + ' mr-2 ' + link.color" />
                          {{ link.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p class="mt-4 leading-relaxed text-sm sm:text-base">
                {{ post.description }}
              </p>
              <!-- زر READ MORE لكل بوست -->
              <button
                class="mt-4 cursor-pointer sm:mt-6 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform border hover:scale-105 active:scale-95 shadow-sm hover:shadow-md dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white border-black bg-black text-white hover:bg-white hover:text-black"
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
import { useColorMode } from '@vueuse/core'
import { useHead } from '#imports'
import { onMounted, ref, computed } from 'vue'
import { useBlogsStore } from '@/stores/blogs'

const blogStore = useBlogsStore()
const selectedCategory = ref('')
const likedPosts = ref([])

const categories = ['Life', 'Technology', 'Health', 'Entertainment']

onMounted(() => {
  if (!blogStore.blogs.length) {
    blogStore.fetchBlogs()
  }
})

const filteredPosts = computed(() => {
  if (selectedCategory.value) {
    return blogStore.filteredPosts.filter(
      (post) => post.category === selectedCategory.value
    )
  }
  return blogStore.filteredPosts
})

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: 'fab fa-facebook',
    color: 'text-blue-600',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: 'fab fa-twitter',
    color: 'text-sky-400',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'fab fa-linkedin',
    color: 'text-blue-700',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/?text=Check%20this%20out',
    icon: 'fab fa-whatsapp',
    color: 'text-green-500',
  },
]

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

const goToItem = (id) => navigateTo(`/blog/${id}`)
const goToMain = () => navigateTo(`/blog/${blogStore.filteredPosts[0].id}`)

const toggleLike = (id) => {
  if (likedPosts.value.includes(id)) {
    likedPosts.value = likedPosts.value.filter((postId) => postId !== id)
  } else {
    likedPosts.value.push(id)
  }
}
</script>

<style>
.container {
  max-width: 90%;
}
</style>
