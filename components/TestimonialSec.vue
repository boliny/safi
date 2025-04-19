<template>
  <div class="bg-light-blue py-10">
    <h2 class="text-center text-2xl md:text-3xl font-bold mb-6">
      RESULTS I HAVE HELPED CREATE
    </h2>

    <div class="relative max-w-5xl mx-auto">
      <div ref="sliderRef" class="keen-slider">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="keen-slider__slide card"
        >
          <div
            class="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-200 text-center"
          >
            <div class="flex justify-center mb-3">
              <svg
                v-for="star in 5"
                :key="star"
                class="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L4.82 19z"
                />
              </svg>
            </div>
            <p
              class="text-gray-700 text-base italic leading-relaxed line-clamp-6"
            >
              "{{ testimonial.text }}"
            </p>
            <div class="mt-4 flex justify-center">
              <NuxtImg
                :src="testimonial.image"
                class="w-20 h-20 rounded-full border-2 border-gray-300"
              />
            </div>
            <h3 class="mt-3 text-lg font-semibold text-gray-900">
              {{ testimonial.name }}
            </h3>
            <p class="text-blue-500 text-sm">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>

      <button
        v-if="showNavigation"
        class="prev-btn absolute left-[-80px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center cursor-pointer"
        @click="prevSlide"
      >
        <svg
          class="w-7 h-7 text-gray-600"
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

      <button
        class="next-btn absolute right-[-80px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center cursor-pointer"
        @click="nextSlide"
      >
        <svg
          class="w-7 h-7 text-gray-600"
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

export default {
  setup() {
    const sliderRef = ref(null)
    const slider = ref(null)
    const slidesPerView = ref(3)
    const showNavigation = ref(true)
    const showPagination = ref(false)

    const updateSliderSettings = () => {
      if (window.innerWidth < 768) {
        slidesPerView.value = 1
        showNavigation.value = false
        showPagination.value = true
      } else {
        slidesPerView.value = 3
        showNavigation.value = true
        showPagination.value = false
      }

      if (slider.value) {
        slider.value.update({
          loop: true,
          slides: { perView: slidesPerView.value, spacing: 20 },
        })
      }
    }

    onMounted(() => {
      updateSliderSettings()
      slider.value = new KeenSlider(sliderRef.value, {
        loop: true,
        slides: { perView: slidesPerView.value, spacing: 20 },
        created(s) {
          setInterval(() => {
            s.moveToIdx(s.track.details.rel + 1, true)
          }, 3000) // MARKER: تم إضافة التشغيل التلقائي بدون توقف
        },
      })
      window.addEventListener('resize', updateSliderSettings)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateSliderSettings)
    })

    const prevSlide = () => slider.value.prev()
    const nextSlide = () => slider.value.next()

    return {
      sliderRef,
      prevSlide,
      nextSlide,
      showNavigation,
      showPagination,
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

<style>
.bg-light-blue {
  background-color: #e3f2fd;
}
</style>
