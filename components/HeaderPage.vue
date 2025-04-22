<template>
  <header
    :class="[
      'sticky top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
      colorMode === 'dark' ? 'bg-black text-white' : 'bg-white text-black',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div
        class="text-2xl font-bold text-orange-500 cursor-pointer"
        @click="navigateAndClose('/')"
      >
        <NuxtImg src="/logo-01.png" alt="logo" class="w-15 h-15" />
      </div>

      <!-- Desktop Links -->
      <nav class="hidden md:flex items-center space-x-4">
        <ThemeToggle />
        <a
          v-for="link in links"
          :key="link.label"
          :class="[
            navLinkClass(link.path),
            isActive(link.path) ? 'active' : '',
          ]"
          @click="navigateAndClose(link.path)"
        >
          {{ link.label }}
        </a>

        <!-- Social Icons -->
        <!-- <div class="flex space-x-4 ml-4">
          <a
            v-for="icon in socialIcons"
            :key="icon.name"
            :href="icon.link"
            target="_blank"
            :class="iconClass"
          >
            <Icon :name="icon.name" />
          </a>
        </div> -->
      </nav>

      <!-- Hamburger Menu -->
      <button class="md:hidden cursor-pointer" @click="toggleSidebar">
        <Icon
          name="mdi:menu"
          :class="colorMode === 'dark' ? 'text-white' : 'text-black'"
          class="text-4xl"
        />
      </button>
    </div>

    <!-- Overlay -->
    <transition name="fade">
      <div
        v-if="showSidebar"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        @click="closeSidebar"
      />
    </transition>

    <!-- Sidebar -->
    <transition name="slide-left">
      <div
        v-if="showSidebar"
        class="fixed top-0 left-0 w-2/3 h-full p-8 z-50"
        :class="
          colorMode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
        "
      >
        <button
          class="absolute cursor-pointer top-4 right-4 text-3xl"
          @click="closeSidebar"
        >
          <Icon name="mdi:close" />
        </button>

        <!-- Dark Mode Toggle for Sidebar on Mobile -->
        <ThemeToggle />

        <ul class="mt-16 space-y-6">
          <li v-for="link in links" :key="link.label">
            <a
              class="block cursor-pointer text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-orange-500"
              :class="
                (isActive(link.path) ? 'text-orange-500 font-bold' : '',
                colorMode === 'dark'
                  ? 'bg-black text-white'
                  : 'bg-white text-black')
              "
              @click="navigateAndClose(link.path)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="flex space-x-4 mt-10">
          <a
            v-for="icon in socialIcons"
            :key="icon.name"
            :href="icon.link"
            target="_blank"
            class="text-2xl text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-110"
            :class="colorMode === 'dark' ? 'text-white' : 'text-black'"
          >
            <Icon :name="icon.name" />
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode({
  emitAuto: true,
  modes: {
    dark: 'dark',
    light: 'light',
  },
  storageKey: 'vueuse-color-scheme',
})

const router = useRouter()
const route = useRoute()

const showSidebar = ref(false)

const toggleSidebar = () => (showSidebar.value = !showSidebar.value)
const closeSidebar = () => (showSidebar.value = false)

const navigateAndClose = (path) => {
  router.push(path)
  closeSidebar()
}

const links = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'About', path: '/about' },
  { label: 'Privacy', path: '/privacy' },
]

// const socialIcons = [
//   { name: 'mdi:facebook', link: 'https://facebook.com' },
//   { name: 'mdi:instagram', link: 'https://instagram.com' },
//   { name: 'mdi:youtube', link: 'https://youtube.com' },
//   { name: 'mdi:whatsapp', link: 'https://wa.me/123456789' },
// ]

const isActive = (path) => route.path === path

const navLinkClass = (path) => {
  return `text-xl nav-link cursor-pointer font-semibold transition-colors duration-300 ${
    colorMode.value === 'dark'
      ? 'text-white hover:text-orange-300'
      : 'text-black hover:text-orange-500'
  } ${isActive(path) ? 'active' : ''}`
}

// const iconClass = computed(() => {
//   return `text-2xl transition-transform duration-300 transform hover:scale-110 ${
//     colorMode.value === 'dark'
//       ? 'text-white hover:text-orange-300'
//       : 'text-black hover:text-orange-500'
//   }`
// })
</script>

<style scoped>
.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.375rem;
  transition: all 0.3s ease-in-out;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 0;
  height: 2px;
  background: #ff0000;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #ffcc00;
}

/* Overlay fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Sidebar slide-in */
.slide-left-enter-active {
  transition: transform 0.4s ease;
}
.slide-left-leave-active {
  transition: transform 0.3s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
