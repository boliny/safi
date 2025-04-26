// stores/blogs.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const getRandomViews = () => Math.floor(Math.random() * 1000 + 100)
const getRandomLikes = () => Math.floor(Math.random() * 300 + 20)

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref([])
  const likedPosts = ref([])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('https://fakestoreapi.in/api/products')
      const data = await res.json()
      blogs.value = data.products.map((post) => ({
        ...post,
        views: getRandomViews(),
        likes: getRandomLikes(),
      }))
    } catch (e) {
      console.error('Error fetching blogs:', e)
    }
  }

  const toggleLike = (postId) => {
    const index = blogs.value.findIndex((p) => p.id === postId)
    if (index !== -1) {
      if (likedPosts.value.includes(postId)) {
        blogs.value[index].likes--
        likedPosts.value = likedPosts.value.filter((id) => id !== postId)
      } else {
        blogs.value[index].likes++
        likedPosts.value.push(postId)
      }
    }
  }

  const filteredPosts = computed(() => blogs.value.filter(Boolean))

  return {
    blogs,
    likedPosts,
    fetchBlogs,
    toggleLike,
    filteredPosts,
  }
})
