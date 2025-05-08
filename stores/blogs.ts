// stores/blogs.ts
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

interface Blog {
  id: number
  title: string
  description: string
  image: string
  price: number
  views: number
  likes: number
  [key: string]: number | string
}

interface FetchBlogsResponse {
  products: Omit<Blog, 'views' | 'likes'>[]
}

const getRandomViews = (): number => Math.floor(Math.random() * 1000 + 100)
const getRandomLikes = (): number => Math.floor(Math.random() * 300 + 20)

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref<Blog[]>([])
  const likedPosts = ref<number[]>([])

  // ✅ استرجاع الـ Likes من localStorage عند بداية التشغيل
  if (import.meta.client) {
    const savedLikes = localStorage.getItem('likedPosts')
    if (savedLikes) {
      likedPosts.value = JSON.parse(savedLikes)
    }
  }

  // ✅ مراقبة أي تغيير في likedPosts وتحديث localStorage
  watch(
    likedPosts,
    (newLikes) => {
      if (import.meta.client) {
        localStorage.setItem('likedPosts', JSON.stringify(newLikes))
      }
    },
    { deep: true }
  )

  const fetchBlogs = async (): Promise<void> => {
    try {
      const res = await fetch('https://fakestoreapi.in/api/products')
      const data: FetchBlogsResponse = await res.json()
      blogs.value = data.products.map(
        (post): Blog => ({
          id: Number(post.id),
          title: String(post.title),
          description: String(post.description),
          image: String(post.image),
          price: Number(post.price),
          views: getRandomViews(),
          likes: getRandomLikes(),
        })
      )
    } catch (e) {
      console.error('Error fetching blogs:', e)
    }
  }

  const toggleLike = (postId: number): void => {
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
