<template>
  <div
    class="bg-gradient-to-r from-gray-900 to-gray-500 flex items-center justify-center p-4 sm:p-6"
  >
    <div class="flex flex-col md:flex-row items-center w-full gap-12 p-6">
      <!-- القسم الأيسر - فيديو -->
      <div
        class="w-full md:w-1/2 relative p-4 flex justify-center"
        data-aos="zoom-in"
      >
        <div class="relative w-full" style="padding-top: 56.25%">
          <iframe
            class="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/FkHh2BJ_PKI"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>

      <!-- القسم الأيمن - نص -->
      <div
        class="w-full md:w-1/2 p-6 sm:p-8 md:p-10 text-white text-left"
        data-aos="fade-left"
      >
        <span class="text-yellow-300 font-semibold text-sm block">
          Get Instant Access to The Free
        </span>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-snug"
        >
          SELF DEVELOPMENT COURSE
        </h2>
        <p class="mt-4 text-sm sm:text-base leading-relaxed opacity-80">
          Learn about how them you went down prying the wedding ring off his
          cold, dead finger. I don't know what you did, Fry, but once again, you
          screwed up! Now all the planets are gonna start cracking wise about
          our mamas
        </p>
        <button
          class="bg-red-600 mt-5 hover:bg-orange-500 font-bold cursor-pointer text-white hover:text-black py-3 px-8 rounded-xl shadow-lg transform hover:scale-110 transition duration-300"
        >
          START NOW
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'SelfDevelopmentSection',
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
    })
  },
}
</script>
