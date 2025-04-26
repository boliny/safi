<template>
  <div
    v-if="post"
    :class="[
      'relative min-h-screen flex flex-col',
      colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black',
    ]"
  >
    <!-- Container -->
    <div
      class="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8"
    >
      <!-- Main Content -->
      <main class="flex-1">
        <!-- Title -->
        <h1 class="text-2xl md:text-4xl font-bold text-center mb-6">
          {{ post.title }}
        </h1>

        <!-- Info Bar -->
        <div
          class="flex flex-wrap justify-center items-center gap-6 my-5 text-xs sm:text-sm"
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

        <!-- Main Image -->
        <NuxtImg
          v-if="post.image"
          :src="post.image"
          alt="Blog image"
          class="w-full h-72 md:h-96 object-cover rounded-lg mb-6"
          loading="lazy"
        />

        <!-- Description -->
        <p class="text-base md:text-lg leading-7 mb-6">
          {{ post.description }}
        </p>

        <!-- Share This -->
        <div>
          <p class="text-lg font-bold mb-2">Share This</p>
          <div class="w-6 h-0.5 bg-black dark:bg-white mb-4"></div>

          <div class="flex space-x-4 text-3xl">
            <a
              v-for="(link, i) in shareLinks"
              :key="i"
              :href="link.href"
              target="_blank"
              :class="link.color + ' hover:brightness-125 transition'"
            >
              <i :class="link.icon" />
            </a>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between gap-10 mt-10">
          <!-- Previous Post -->
          <div v-if="prevPost" class="flex items-center gap-4">
            <NuxtLink
              :to="`/blog/${prevPost.id}`"
              class="flex items-center space-x-4"
            >
              <!-- الصورة -->
              <img
                class="rounded-full w-24 h-24 object-cover"
                :src="prevPost.image"
                alt="Previous Post Image"
              />
              <!-- العنوان مع السهم -->
              <div class="flex flex-col items-start">
                <span class="tracking-widest uppercase text-gray-400 text-xs">
                  Previous Post
                </span>
                <div class="flex items-center gap-2">
                  <i class="fas fa-arrow-left text-xl text-gray-500"></i>
                  <p class="text-lg font-bold">{{ prevPost.title }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Next Post -->
          <div v-if="nextPost" class="flex items-center gap-4">
            <NuxtLink
              :to="`/blog/${nextPost.id}`"
              class="flex items-center space-x-4"
            >
              <!-- العنوان مع السهم -->
              <div class="flex flex-col items-end text-right">
                <span class="tracking-widest uppercase text-gray-400 text-xs">
                  Next Post
                </span>
                <div class="flex items-center gap-2">
                  <p class="text-lg font-bold">{{ nextPost.title }}</p>
                  <i class="fas fa-arrow-right text-xl text-gray-500"></i>
                </div>
              </div>
              <!-- الصورة -->
              <img
                class="rounded-full w-24 h-24 object-cover"
                :src="nextPost.image"
                alt="Next Post Image"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- Other Products Section -->
        <h2
          class="text-2xl md:text-2xl font-bold my-6 uppercase tracking-widest"
        >
          you may also like
        </h2>
        <div class="w-6 h-0.5 bg-black mt-2" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mt-12">
          <div
            v-for="product in otherProducts"
            :key="product.id"
            class="relative w-70 h-70 group overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <!-- Image Full Background -->
            <NuxtImg
              :src="product.image"
              class="w-full h-full object-cover m-auto transition-transform duration-500"
              alt="Product image"
            />

            <!-- Black Overlay -->
            <div
              class="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"
            />

            <!-- Content Above Image -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10"
            >
              <h3
                class="text-base cursor-pointer font-bold text-white mb-4 drop-shadow-lg transition-all duration-500"
              >
                {{ product.title }}
              </h3>
              <NuxtLink
                :to="`/blog/${product.id}`"
                class="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300"
              >
                View Post
              </NuxtLink>
            </div>
          </div>
        </div>
      </main>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/4 md:sticky top-20 self-start">
        <BlogSideBar />
      </aside>
    </div>
  </div>

  <div v-else class="text-center py-20">Post not found.</div>
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

const shareLinks = [
  {
    href: 'https://facebook.com',
    icon: 'fab fa-facebook-square',
    color: 'text-blue-600',
  },
  {
    href: 'https://twitter.com',
    icon: 'fab fa-twitter-square',
    color: 'text-sky-400',
  },
  {
    href: 'https://linkedin.com',
    icon: 'fab fa-linkedin',
    color: 'text-blue-700',
  },
  {
    href: 'https://wa.me/?text=Check%20this%20out',
    icon: 'fab fa-whatsapp-square',
    color: 'text-green-500',
  },
]
</script>
