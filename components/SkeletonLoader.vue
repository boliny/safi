<template>
  <div
    class="animate-pulse bg-gray-300 rounded-md"
    :style="{
      height,
      width,
      marginTop,
      marginBottom,
    }"
  />
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: '20px',
  },
  width: {
    type: String,
    default: '100%',
  },
  marginTop: {
    type: String,
    default: '0',
  },
  marginBottom: {
    type: String,
    default: '0',
  },
})
</script>

<style scoped>
/* هنا نستخدم tailwind أو ممكن نعمل animation يدوي */
</style>
