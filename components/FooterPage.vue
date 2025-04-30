<template>
  <footer
    class="p-10 grid grid-cols-1 md:grid-cols-4 gap-10"
    :class="
      colorMode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    "
  >
    <!-- Site Info -->
    <div>
      <h2 class="text-2xl font-semibold mb-2">Safy Muscle</h2>
      <p class="text-sm leading-relaxed">
        A smart way to track your fitness journey with structured routines and a
        clean interface that keeps you motivated.
      </p>
    </div>
    <!-- Navigation -->
    <nav class="flex flex-col m-auto justify-center text-xs space-y-2">
      <a
        v-for="link in links"
        :key="link.label"
        :class="[navLinkClass(link.path), isActive(link.path) ? 'active' : '']"
        @click="navigateAndClose(link.path)"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- Contact / Info -->
    <div>
      <h3 class="text-lg font-medium mb-3">Get in Touch</h3>
      <p class="text-sm mb-1">Website: xyz@safymuscle.net</p>
      <p class="text-sm">Phone: +xxx xxx xxxx</p>
    </div>
    <!-- Bottom bar -->
    <div class="border-gray-700 text-center text-sm">
      <a
        href="https://www.skylink-eg.com/en"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block mb-4 text-md"
      >
        © 2025 All rights reserved to safymuscle.net
        <hr />
        <br />
        <p>Powered by</p>
        <NuxtImg
          :src="colorMode === 'dark' ? '/logo-dark.png' : '/logo-light.png'"
          alt="SkyLink Logo"
          class="h-12 m-auto w-auto"
          loading="lazy"
        />
      </a>
    </div>
  </footer>
</template>

<script setup>
import { useColorMode } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'About', path: '/about' },
  { label: 'Privacy', path: '/privacy' },
]

const isActive = (path) => route.path === path

const navLinkClass = (path) => {
  return `text-sm nav-link cursor-pointer border-b  font-lighter transition-colors duration-300 ${
    colorMode.value === 'dark'
      ? 'text-white hover:text-orange-300'
      : 'text-black hover:text-orange-500'
  } ${isActive(path) ? 'active' : ''}`
}

const colorMode = useColorMode({
  emitAuto: true,
  modes: {
    dark: 'dark',
    light: 'light',
  },
  storageKey: 'vueuse-color-scheme',
})
</script>

<style scoped>
.nav-link {
  position: relative;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #ffcc00;
}
</style>
