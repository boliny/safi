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
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8"
    >
      <!-- Main Content -->
      <main class="flex-1">
        <!-- Title -->
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 break-words"
        >
          {{ post.title }}
        </h1>

        <!-- Info Bar -->
        <div
          class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 my-5 text-xs sm:text-sm"
        >
          <span class="flex items-center"
            ><i class="fas fa-calendar-alt mr-1" /> Apr 8, 2025</span
          >
          <span class="flex items-center"
            ><i class="fas fa-eye mr-1" /> {{ post.views }}</span
          >
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
                    <i :class="`${link.icon} mr-2 ${link.color}`" />
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
          :src="String(post.image)"
          alt="Blog image"
          class="w-full h-60 sm:h-72 md:h-96 object-cover rounded-lg mb-6"
          loading="lazy"
        />

        <!-- Description -->
        <p class="text-base sm:text-lg leading-7 mb-6 px-2 sm:px-0">
          {{ post.description }}
        </p>

        <!-- Share This -->
        <div class="px-2 sm:px-0">
          <p class="text-lg font-bold mb-2">Share This</p>
          <div class="w-6 h-0.5 bg-black dark:bg-white mb-4" />

          <div class="flex space-x-4 text-2xl sm:text-3xl">
            <a
              v-for="(link, i) in shareLinks"
              :key="i"
              :href="link.href"
              target="_blank"
              :class="`${link.color} hover:brightness-125 transition`"
            >
              <i :class="link.icon" />
            </a>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-10 mt-10 px-2 sm:px-0"
        >
          <!-- Previous Post -->
          <div v-if="prevPost" class="flex items-center gap-4 w-full sm:w-auto">
            <NuxtLink
              :to="`/blog/${prevPost.id}`"
              class="flex items-center space-x-4"
            >
              <img
                class="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
                :src="String(prevPost.image)"
                alt="Previous Post Image"
              />
              <div class="flex flex-col items-start">
                <span class="tracking-widest uppercase text-gray-400 text-xs"
                  >Previous Post</span
                >
                <div class="flex items-center gap-2">
                  <i
                    class="fas fa-arrow-left text-lg sm:text-xl text-gray-500"
                  />
                  <p class="text-sm sm:text-lg font-bold">
                    {{ prevPost.title }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Next Post -->
          <div v-if="nextPost" class="flex items-center gap-4 w-full sm:w-auto">
            <NuxtLink
              :to="`/blog/${nextPost.id}`"
              class="flex items-center space-x-4"
            >
              <div class="flex flex-col items-end text-right">
                <span class="tracking-widest uppercase text-gray-400 text-xs"
                  >Next Post</span
                >
                <div class="flex items-center gap-2">
                  <p class="text-sm sm:text-lg font-bold">
                    {{ nextPost.title }}
                  </p>
                  <i
                    class="fas fa-arrow-right text-lg sm:text-xl text-gray-500"
                  />
                </div>
              </div>
              <img
                class="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
                :src="String(nextPost.image)"
                alt="Next Post Image"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- Other Products Section -->
        <h2
          class="text-xl sm:text-2xl font-bold my-6 uppercase tracking-widest px-2 sm:px-0"
        >
          You may also like
        </h2>
        <div class="w-6 h-0.5 bg-black mt-2 mb-6" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <div
            v-for="product in otherProducts"
            :key="product.id"
            class="relative w-full h-60 sm:h-72 group overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <NuxtImg
              :src="String(product.image)"
              class="w-full h-full object-cover"
              alt="Product image"
            />
            <div
              class="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"
            />
            <div
              class="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10"
            >
              <h3
                class="text-base sm:text-lg font-bold text-white mb-4 drop-shadow-lg"
              >
                {{ product.title }}
              </h3>
              <NuxtLink
                :to="`/blog/${product.id}`"
                class="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
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

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogsStore } from '@/stores/blogs'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

const blogStore = useBlogsStore()
const route = useRoute()
const id = parseInt(route.params.id as string)

const post = computed(() => blogStore.blogs.find((p) => p.id === id))
const currentIndex = computed(() =>
  blogStore.blogs.findIndex((p) => p.id === id)
)
const prevPost = computed(() => blogStore.blogs[currentIndex.value - 1])
const nextPost = computed(() => blogStore.blogs[currentIndex.value + 1])

interface SocialLink {
  name: string
  href: string
  icon: string
  color: string
}

const socialLinks: SocialLink[] = [
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

const shareLinks: Pick<SocialLink, 'href' | 'icon' | 'color'>[] = [
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

const otherProducts = computed(() =>
  blogStore.blogs.filter((p) => p.id !== id).slice(0, 2)
)
</script>
