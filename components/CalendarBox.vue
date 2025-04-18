<template>
  <div class="min-h-screen bg-gray-900 p-6 text-white">
    <h1 class="text-2xl font-bold text-center mb-4">ATHLETE TIMETABLE</h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="relative lg:h-80 overflow-hidden group"
      >
        <NuxtImg
          :src="card.image"
          alt="Workout"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- Red overlay -->
        <div
          class="absolute inset-0 bg-black/20  group-hover:bg-red-600/50 transition duration-300"
        />
        <!-- Text overlay -->
        <div class="absolute inset-0 flex flex-col justify-end p-3 z-10">
          <p class="text-sm text-white drop-shadow">{{ card.date }}</p>
          <p class="text-lg font-bold drop-shadow">{{ card.day }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  { date: 'October, 6', day: 'MONDAY', image: '/imgs/8.jpg' },
  { date: 'October, 7', day: 'TUESDAY', image: '/imgs/9.jpg' },
  { date: 'October, 8', day: 'WEDNESDAY', image: '/imgs/10.jpg' },
  { date: 'October, 9', day: 'THURSDAY', image: '/imgs/11.jpg' },
  { date: 'October, 10', day: 'FRIDAY', image: '/imgs/12.jpg' },
  { date: 'October, 11', day: 'SATURDAY', image: '/imgs/13.jpg' },
]
</script>
