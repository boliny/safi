<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat py-20 px-8 text-white flex items-center justify-center"
    :style="`background-image: url('/newsletter-bg.jpg')`"
  >
    <div class="absolute inset-0 bg-gray-900 bg-opacity-70" />
    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <h2 class="text-4xl md:text-6xl font-bold leading-tight">
        Sign Up for <span class="text-yellow-400">The Newsletter</span>
      </h2>
      <p class="mt-4 text-lg opacity-90">
        Stay updated with the latest news and insights from our company.
        Subscribe now and never miss an update!
      </p>
      <div class="mt-6 flex justify-center">
        <div
          class="flex w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            class="px-4 py-3 w-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            class="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-500 transition"
          >
            SUBSCRIBE!
          </button>
        </div>
      </div>
      <div class="mt-8 flex justify-center space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-yellow-400 transition"
        >
          <i class="fab fa-facebook-f text-xl"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-yellow-400 transition"
        >
          <i class="fab fa-twitter text-xl"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-yellow-400 transition"
        >
          <i class="fab fa-instagram text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-yellow-400 transition"
        >
          <i class="fab fa-linkedin-in text-xl"></i>
        </a>
        <a
          href="https://www.medium.com"
          target="_blank"
          class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-yellow-400 transition"
        >
          <i class="fab fa-medium text-xl"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
/* Add global styles if needed */
</style>
