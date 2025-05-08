<template>
  <div class="bg-gradient-to-r from-gray-900 to-gray-500 py-10">
    <h2
      class="text-center text-2xl md:text-3xl font-bold mb-8 text-white"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Blog
    </h2>

    <div
      class="relative max-w-6xl mx-auto px-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div ref="sliderRef" class="keen-slider">
        <div
          v-for="(post, index) in blogStore.filteredPosts"
          :key="index"
          class="keen-slider__slide bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
        >
          <img
            :src="post.image"
            class="w-full h-56 object-cover"
            loading="lazy"
          />
          <div class="p-4 flex-1 flex flex-col justify-between">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ truncateWords(post.title, 5) }}
            </h3>
            <a
              class="text-blue-500 text-sm font-semibold mt-3 inline-block"
              href="#"
              @click.prevent="goToItem(post.id)"
            >
              Read More
            </a>
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

    <div class="flex justify-center mt-8">
      <button
        class="btn btn-1 hover-filled-slide-down relative cursor-pointer bg-gray-900 px-8 py-4 rounded text-white text-lg font-semibold overflow-hidden group"
        @click="goToBlog"
      >
        <span
          class="absolute inset-0 bg-gray-700 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center"
        >
          GO TO BLOG
        </span>
        <span
          class="relative transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0"
        >
          All Posts
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useBlogsStore } from '~/stores/blogs'

export default {
  setup() {
    const blogStore = useBlogsStore()
    const sliderRef = ref(null)
    let sliderInstance = null
    let interval = null

    const displayedPosts = computed(() => blogStore.filteredPosts)

    const truncateWords = (text, wordLimit) => {
      const words = text.split(' ')
      return words.length > wordLimit
        ? words.slice(0, wordLimit).join(' ') + '...'
        : text
    }

    const goToItem = (id) => {
      navigateTo(`/blog/${id}`)
    }

    const goToBlog = () => {
      navigateTo('/blog')
    }

    const initializeSlider = () => {
      if (sliderInstance) sliderInstance.destroy()

      sliderInstance = new KeenSlider(sliderRef.value, {
        loop: true,
        slides: {
          perView: 3,
          spacing: 30,
        },
        breakpoints: {
          '(max-width: 768px)': {
            slides: { perView: 1, spacing: 10 },
          },
          '(min-width: 769px) and (max-width: 1024px)': {
            slides: { perView: 2, spacing: 20 },
          },
          '(min-width: 1025px)': {
            slides: { perView: 3, spacing: 30 },
          },
        },
        created() {
          startAutoPlay()
        },
        destroyed() {
          stopAutoPlay()
        },
      })

      sliderRef.value.addEventListener('mouseenter', stopAutoPlay)
      sliderRef.value.addEventListener('mouseleave', startAutoPlay)
    }

    const startAutoPlay = () => {
      stopAutoPlay() // نحذف القديم الأول
      interval = setInterval(() => {
        if (sliderInstance) {
          sliderInstance.next()
        }
      }, 3000) // كل 3 ثواني
    }

    const stopAutoPlay = () => {
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }

    const prevSlide = () => {
      if (sliderInstance) {
        sliderInstance.prev()
      }
    }

    const nextSlide = () => {
      if (sliderInstance) {
        sliderInstance.next()
      }
    }

    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true,
      })

      if (!blogStore.blogs.length) {
        blogStore.fetchBlogs()
      }

      setTimeout(() => {
        initializeSlider()
      }, 500)
    })

    onBeforeUnmount(() => {
      if (sliderInstance) {
        sliderInstance.destroy()
      }
      stopAutoPlay()
    })

    return {
      blogStore,
      sliderRef,
      displayedPosts,
      goToItem,
      goToBlog,
      prevSlide,
      nextSlide,
      truncateWords,
    }
  },
}
</script>

<style scoped>
/*--- btn-1 ---*/
.btn-1::before {
  background-color: rgb(28, 31, 30);
  transition: 0.3s ease-out;
}

.btn-1 span {
  color: rgb(255, 255, 255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

.btn-1 span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

/* 1.hover-filled-slide-down */
.btn.hover-filled-slide-down::before {
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
</style>
