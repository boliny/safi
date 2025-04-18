<template>
  <div
    class="flex items-start space-x-4 hover:scale-[1.02] transition-transform duration-300"
  >
    <div
      class="bg-gradient-to-tr from-red-600 to-orange-500 p-4 rounded-full shadow-lg text-white"
    >
      <FontAwesomeIcon :icon="['fas', icon]" class="w-6 h-6" />
    </div>
    <div>
      <h3 class="font-bold text-lg text-white">{{ title }}</h3>
      <p class="text-sm mt-2 text-gray-300">
        Fusce gravida tortor felis. Ac dictum risus sagittis id morbi posu justo
        eleifend libero ultricies asunt.
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: 'check',
  },
  title: {
    type: String,
    default: 'Feature Title',
  },
})
</script>
