<template>
  <div class="bg-gradient-to-r from-red-700 to-red-800 py-10 overflow-hidden">
    <h2
      class="text-center text-2xl md:text-3xl font-bold text-white mb-6"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      RESULTS I HAVE HELPED CREATE
    </h2>

    <div
      class="relative max-w-6xl mx-auto px-4 sm:px-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div ref="sliderRef" class="keen-slider">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="keen-slider__slide flex justify-center"
        >
          <div
            class="bg-white w-full max-w-[340px] sm:max-w-[400px] shadow-lg p-6 border border-orange-500 rounded-lg text-center"
          >
            <div class="flex justify-center mb-3">
              <svg
                v-for="star in 5"
                :key="star"
                class="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L4.82 19z"
                />
              </svg>
            </div>
            <p class="text-gray-700 text-sm italic leading-relaxed mb-4">
              "{{ testimonial.text }}"
            </p>
            <div class="flex justify-center mb-2">
              <NuxtImg
                :src="testimonial.image"
                class="w-16 h-16 rounded-full border-2 border-orange-400"
                loading="lazy"
              />
            </div>
            <h3 class="text-base font-semibold text-black">
              {{ testimonial.name }}
            </h3>
            <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>

      <!-- الزر السابق -->
      <button
        class="prev-btn hidden md:flex absolute left-[-40px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow items-center justify-center cursor-pointer"
        @click="prevSlide"
      >
        <svg
          class="w-6 h-6 text-orange-600"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- الزر التالي -->
      <button
        class="next-btn hidden md:flex absolute right-[-40px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow items-center justify-center cursor-pointer"
        @click="nextSlide"
      >
        <svg
          class="w-6 h-6 text-orange-600"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  setup() {
    const sliderRef = ref(null)
    const slider = ref(null)

    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true,
      })

      slider.value = new KeenSlider(sliderRef.value, {
        loop: true,
        slides: {
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: 3,
              spacing: 20,
            },
          },
        },
        created(s) {
          setInterval(() => {
            s.moveToIdx(s.track.details.rel + 1, true)
          }, 3000)
        },
      })
    })

    onUnmounted(() => {
      if (slider.value) {
        slider.value.destroy()
      }
    })

    const prevSlide = () => slider.value?.prev()
    const nextSlide = () => slider.value?.next()

    return {
      sliderRef,
      prevSlide,
      nextSlide,
      testimonials: [
        {
          text: 'This service helped me grow my business tremendously!',
          name: 'Alice Johnson',
          role: 'Marketing Manager',
          image: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          text: 'The best decision I ever made was using this platform.',
          name: 'Michael Smith',
          role: 'Entrepreneur',
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          text: 'Highly recommended for anyone looking to improve!',
          name: 'Sophia Brown',
          role: 'Designer',
          image: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
          text: 'Great experience, I will definitely use this again!',
          name: 'David Lee',
          role: 'Developer',
          image: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* لتفادي سكرول أفقي */
body {
  overflow-x: hidden;
}
</style>
