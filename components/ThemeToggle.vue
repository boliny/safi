<!-- components/ThemeToggle.vue -->
<template>
  <!-- Toggle Dark Mode -->
  <div
    class="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-500"
    @click="toggleDark"
  >
    <div
      class="w-6 h-6 rounded-full bg-white dark:bg-yellow-400 transform transition-transform duration-500 flex items-center justify-center"
      :class="colorMode === 'dark' ? 'translate-x-8' : 'translate-x-0'"
    >
      <Icon
        :name="
          colorMode === 'dark' ? 'mdi:weather-night' : 'mdi:white-balance-sunny'
        "
        class="text-sm text-black"
      />
    </div>
  </div>
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

const toggleDark = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
