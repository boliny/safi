<template>
  <div class="bg-cream py-10">
    <h2 class="text-center text-2xl md:text-3xl font-bold mb-6">Blog</h2>

    <div class="relative max-w-5xl mx-auto">
      <div ref="sliderRef" class="keen-slider">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="keen-slider__slide bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
        >
          <img :src="blog.image" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ blog.title }}
            </h3>
            <a
              href="#"
              class="text-blue-500 text-sm font-semibold mt-3 inline-block"
              >Read More</a
            >
          </div>
        </div>
      </div>
      <!-- أزرار التنقل (مخفية على الهواتف) -->
      <button
        @click="prevSlide"
        class="hidden md:flex prev-btn absolute left-2 md:left-[-70px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow items-center justify-center cursor-pointer z-10"
      >
        <svg
          class="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="hidden md:flex next-btn absolute right-2 md:right-[-70px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow items-center justify-center cursor-pointer z-10"
      >
        <svg
          class="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>

    <div class="flex justify-center mt-6">
      <button
        class="relative bg-gray-900 px-6 py-3 rounded text-white text-lg font-semibold overflow-hidden group"
      >
        <span
          class="absolute inset-0 bg-gray-700 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center"
          >GO TO BLOG</span
        >
        <span
          class="relative transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0"
          >All Posts</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

export default {
  setup() {
    const sliderRef = ref(null)
    let sliderInstance = null
    const blogs = ref([
      {
        image: 'https://picsum.photos/400/300?random=1',
        title: 'How to be 1% Better Every Day',
      },
      {
        image: 'https://picsum.photos/400/300?random=2',
        title: '5 Habits of Highly Effective People',
      },
      {
        image: 'https://picsum.photos/400/300?random=3',
        title: 'Why Mindset Matters',
      },
      {
        image: 'https://picsum.photos/400/300?random=4',
        title: 'Building a Strong Morning Routine',
      },
      {
        image: 'https://picsum.photos/400/300?random=5',
        title: 'The Power of Gratitude',
      },
    ])

    onMounted(() => {
      sliderInstance = new KeenSlider(sliderRef.value, {
        loop: true,
        slides: { perView: 3, spacing: 20 },
      })
    })

    const prevSlide = () => sliderInstance.prev()
    const nextSlide = () => sliderInstance.next()

    return { blogs, prevSlide, nextSlide, sliderRef }
  },
}
</script>

<style>
.bg-cream {
  background-color: #f5e6ca;
}
</style>
