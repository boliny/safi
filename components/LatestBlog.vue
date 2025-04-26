<template>
  <div class="bg-gradient-to-r from-gray-900 to-gray-500 py-10">
    <!-- Blog Section Title -->
    <h2
      class="text-center text-2xl md:text-3xl font-bold mb-8 text-white"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Blog
    </h2>

    <!-- Blog Slider -->
    <div
      class="relative max-w-6xl mx-auto px-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div ref="sliderRef" class="keen-slider space-x-8">
        <!-- عرض المنتجات في السلايدر -->
        <div
          v-for="(post, index) in blogStore.filteredPosts"
          :key="index"
          class="keen-slider__slide bg-white rounded-xl shadow-md overflow-hidden"
        >
          <NuxtImg
            :src="post.image"
            class="w-full h-56 object-cover"
            loading="lazy"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ post.title }}
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
    </div>

    <!-- Go to Blog Button -->
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
import { useBlogsStore } from '@/stores/blogs'

export default {
  setup() {
    const blogStore = useBlogsStore()
    const displayedPosts = computed(() => {
      // لاختيار كل المدخلات دون تقيد بعدد معين هنا
      return blogStore.filteredPosts
    })

    // إصلاح مشكلة goToItem
    const goToItem = (id) => {
      navigateTo(`/blog/${id}`)
    }

    const goToBlog = () => {
      navigateTo('/blog')
    }

    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true, // إزالة offset
      })
      if (!blogStore.blogs.length) {
        blogStore.fetchBlogs()
      }

      // Initialize the slider after blogs are fetched
      if (blogStore.filteredPosts.length) {
        initializeSlider()
      }
    })

    const sliderRef = ref(null)
    let sliderInstance = null

    // Initialize the slider with autoplay
    const initializeSlider = () => {
      sliderInstance = new KeenSlider(sliderRef.value, {
        loop: true,
        breakpoints: {
          '(min-width: 768px)': { slides: { perView: 3, spacing: 32 } },
          '(min-width: 1024px)': { slides: { perView: 3, spacing: 36 } },
        },
        slides: { perView: 3, spacing: 20 },
        duration: 1000, // تعيين سرعة الأنيميشن بين الشرائح
        interval: 500, // المدة بين كل سلايد
        autoplay: true, // تفعيل التمرير التلقائي
        draggable: true, // تمكين السحب اليدوي
      })
    }

    // Cleanup when component is destroyed
    onBeforeUnmount(() => {
      if (sliderInstance) sliderInstance.destroy()
    })

    return { blogStore, sliderRef, displayedPosts, goToItem, goToBlog }
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
