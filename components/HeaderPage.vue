<template>
  <header
    :class="[
      'sticky top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
      isScrolled ? 'bg-white shadow-lg' : 'bg-black/90',
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
      <nav class="hidden md:flex items-center space-x-6">
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
        <div class="flex space-x-4 ml-4">
          <a
            v-for="icon in socialIcons"
            :key="icon.name"
            :href="icon.link"
            target="_blank"
            :class="iconClass"
          >
            <Icon :name="icon.name" />
          </a>
        </div>
      </nav>

      <!-- Hamburger Menu -->
      <button class="md:hidden" @click="toggleSidebar">
        <Icon
          name="mdi:menu"
          :class="isScrolled ? 'text-black' : 'text-white'"
          class="text-4xl"
        />
      </button>
    </div>

    <!-- Overlay and Sidebar -->
    <transition name="sidebar-transition">
      <div v-if="showSidebar" class="fixed inset-0 z-40">
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
          @click="closeSidebar"
        />

        <!-- Sidebar -->
        <div
          class="absolute top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white p-8 z-50 transform scale-95 transition-all duration-500 ease-in-out"
          :class="sidebarClass"
        >
          <button class="absolute top-4 right-4 text-3xl" @click="closeSidebar">
            <Icon name="mdi:close" />
          </button>

          <ul class="mt-16 space-y-6">
            <li v-for="link in links" :key="link.label">
              <a
                class="block text-xl font-medium text-gray-700 hover:text-orange-500"
                :class="isActive(link.path) ? 'text-orange-500 font-bold' : ''"
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
              class="text-2xl text-gray-700 hover:text-orange-500 transition-transform duration-300 transform hover:scale-110"
            >
              <Icon :name="icon.name" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const showSidebar = ref(false)

const toggleSidebar = () => (showSidebar.value = !showSidebar.value)
const closeSidebar = () => (showSidebar.value = false)

const navigateAndClose = (path) => {
  router.push(path)
  closeSidebar()
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = [
  { label: 'Home', path: '/' },
  { label: 'Start Here', path: '/start' },
  { label: 'Blog', path: '/blog' },
  { label: 'Shop', path: '/shop' },
  { label: 'Contact', path: '/contact' },
]

const socialIcons = [
  { name: 'mdi:facebook', link: 'https://facebook.com' },
  { name: 'mdi:instagram', link: 'https://instagram.com' },
  { name: 'mdi:youtube', link: 'https://youtube.com' },
  { name: 'mdi:whatsapp', link: 'https://wa.me/123456789' },
]

const isActive = (path) => route.path === path

const navLinkClass = (path) => {
  return `text-xl nav-link cursor-pointer font-semibold transition-colors duration-300 ${
    isScrolled.value
      ? 'text-black hover:text-orange-500'
      : 'text-white hover:text-orange-300'
  } ${isActive(path) ? 'active' : ''}`
}

const iconClass = computed(() => {
  return `text-2xl transition-transform duration-300 transform hover:scale-110 ${
    isScrolled.value
      ? 'text-black hover:text-orange-500'
      : 'text-white hover:text-orange-300'
  }`
})

const sidebarClass = computed(() => {
  return showSidebar.value ? 'scale-100' : 'scale-95 opacity-0'
})
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
</style>
