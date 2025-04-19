<template>
  <footer class="bg-black text-gray-300 py-10 ">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Site Info -->
      <div>
        <h2 class="text-2xl font-semibold text-white mb-2">
          Safi
        </h2>
        <p class="text-sm text-gray-400 leading-relaxed">
          A smart way to track your fitness journey with structured routines and
          a clean interface that keeps you motivated.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-medium text-white mb-3">Navigation</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="#" class="hover:text-white transition-colors">Home</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Programs</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Trainers</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Contact</a>
          </li>
        </ul>
      </div>

      <!-- Contact / Info -->
      <div>
        <h3 class="text-lg font-medium text-white mb-3">Get in Touch</h3>
        <p class="text-sm text-gray-400 mb-1">
          Email: info@athletetimetable.com
        </p>
        <p class="text-sm text-gray-400">Phone: +123 456 7890</p>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500"
    >
      <a
        href="https://www.skylink-eg.com/en"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block mb-4"
      >
        © 2025 All rights reserved.
        <NuxtImg
          src="/logo1.png"
          alt="SkyLink Logo"
          class="h-22 w-auto object-contain"
        />
      </a>
    </div>
  </footer>
</template>
