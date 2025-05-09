<template>
  <footer
    class="lg:px-5 border-t border-gray-700 p-4 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2"
    :class="
      colorMode === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'
    "
  >
    <!-- Site Info (Desktop) -->
    <div class="hidden md:block">
      <h2 class="text-2xl font-semibold mb-2">Safy Muscle</h2>
      <p class="text-sm leading-relaxed">
        A smart way to track your fitness journey with structured routines and a
        clean interface that keeps you motivated.
      </p>
    </div>

    <!-- Contact Info (Desktop) -->
    <div class="hidden md:block">
      <h3 class="text-lg font-medium mb-3">Get in Touch</h3>
      <p class="text-sm mb-1">Website: xyz@safymuscle.net</p>
      <p class="text-sm">Phone: +xxx xxx xxxx</p>
    </div>

    <!-- Site Info (Mobile) -->
    <div class="block md:hidden text-center">
      <h2 class="text-lg font-semibold mb-1">Safy Muscle</h2>
      <p class="text-xs leading-snug">
        Track your fitness smartly with routines & clean interface.
      </p>
    </div>

    <!-- Contact (Mobile) -->
    <div class="block md:hidden text-center">
      <p class="text-xs">xyz@safymuscle.net</p>
      <p class="text-xs">+xxx xxx xxxx</p>
    </div>

    <!-- Bottom Bar -->
    <div class="text-center text-sm pt-4">
      <a
        href="https://www.skylink-eg.com/en"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-md"
      >
        © 2025 All rights reserved to safymuscle.net
        <hr class="my-2" />
        <p class="lg:text-base text-xs mt-2">Powered by</p>
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

const colorMode = useColorMode({
  emitAuto: true,
  modes: {
    dark: 'dark',
    light: 'light',
  },
  storageKey: 'vueuse-color-scheme',
})
</script>
