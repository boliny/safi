<template>
  <section
    class="relative bg-red-700 h-[500px] text-white py-16 px-6 overflow-hidden"
  >
    <!-- الخلفية -->
    <NuxtImg
      src="/imgs/7.jpg"
      alt="Training"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <!-- overlay أحمر شفاف -->
    <div class="absolute inset-0 bg-red-700/70 z-10" />

    <!-- المحتوى -->
    <div
      class="relative z-20 max-w-4xl mx-auto flex flex-col items-start mt-20"
    >
      <h3 class="text-2xl uppercase font-light tracking-wide">Start your</h3>
      <h1 class="text-4xl md:text-7xl font-bold mb-6">Training Today</h1>
      <button
        class="border cursor-pointer border-white px-6 py-2 text-sm hover:bg-white hover:text-red-700 transition"
      >
        Play Now
      </button>
    </div>
  </section>
</template>
