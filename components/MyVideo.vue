<template>
  <div
    class="bg-gradient-to-r from-red-900 to-orange-600 min-h-screen flex items-center justify-center p-4 sm:p-6"
  >
    <div class="flex flex-col md:flex-row items-center w-full gap-12 p-6">
      <!-- القسم الأيسر - فيديو يوتيوب -->
      <div class="w-full md:w-1/2 relative p-4 flex justify-center">
        <div class="relative w-full" style="padding-top: 56.25%">
          <iframe
            width="560"
            height="315"
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>

      <!-- القسم الأيمن - محتوى نصي -->
      <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-10 text-white text-left">
        <span class="text-yellow-300 font-semibold text-sm block"
          >Get Instant Access to The Free</span
        >
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-snug"
        >
          SELF DEVELOPMENT COURSE
        </h2>
        <p class="mt-4 text-sm sm:text-base leading-relaxed">
          Learn about how them you went down prying the wedding ring off his
          cold, dead finger. I don't know what you did, Fry, but once again, you
          screwed up! Now all the planets are gonna start cracking wise about
          our mamas
        </p>
        <button
          class="mt-6 cursor-pointer bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 w-full sm:w-auto"
        >
          START FOR FREE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelfDevelopmentSection',
}
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  width: 100%;
}

.aspect-h-9::before {
  content: '';
  display: block;
  padding-top: 56.25%; /* نسبة العرض إلى الارتفاع للفيديو */
}

.aspect-h-9 iframe {
  position: absolute;
  width: 200%;
  height: 200%;
}
</style>
