<!-- eslint-disable vue/require-default-prop -->
<template>
  <div
    class="relative h-48 bg-cover bg-center rounded"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div
      class="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end"
    >
      <p class="text-sm text-white font-light">{{ date }}</p>
      <p class="text-lg font-bold">{{ day }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  date: String,
  // eslint-disable-next-line vue/require-default-prop
  day: String,
  // eslint-disable-next-line vue/require-default-prop
  image: String,
})
</script>
