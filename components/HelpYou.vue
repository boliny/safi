<template>
  <div class="about-section p-6 md:p-12 bg-light-gray">
    <h1
      class="text-center text-2xl md:text-4xl font-bold leading-snug my-8 uppercase text-dark-blue"
    >
      I can help you with
    </h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 gap-y-10 max-w-6xl mx-auto"
    >
      <div
        v-for="(service, index) in services"
        :key="index"
        class="card p-6 text-center bg-white shadow-lg rounded-xl"
      >
        <svg
          :class="['w-14 h-14 mx-auto mb-4', service.color]"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="service.iconPath"
          ></path>
        </svg>
        <h2 class="text-lg md:text-xl font-semibold mb-2 text-dark-blue">
          {{ service.title }}
        </h2>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed">
          {{ service.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis eget eros feugiat malesuada.',
    iconPath: 'M3 10h11M9 21V3m7 18l3-3m0 0l-3-3m3 3H9',
    color: 'text-blue-500',
  },
  {
    title: 'Title 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis eget eros feugiat malesuada.',
    iconPath:
      'M9 12l2 2 4-4m-6 8h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z',
    color: 'text-green-500',
  },
  {
    title: 'Title 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis eget eros feugiat malesuada.',
    iconPath: 'M5 13l4 4L19 7',
    color: 'text-red-500',
  },
  {
    title: 'Title 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis eget eros feugiat malesuada.',
    iconPath: 'M12 8v4l3 3m9-3.5a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'text-yellow-500',
  },
]
</script>

<style scoped>
.bg-light-gray {
  background-color: #f3f4f6;
}
.text-dark-blue {
  color: #1e3a8a;
}
</style>
