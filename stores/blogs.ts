// stores/blogs.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// نوع كل Blog
interface Blog {
  id: number
  title: string
  description: string
  price: number
  views: number
  likes: number
  [key: string]: number | string // Restricting index signature to number and string types
}

// نوع الريسبونس اللي جاي من الـ API
interface FetchBlogsResponse {
  products: Omit<Blog, 'views' | 'likes'>[] // المنتجات بدون views و likes لأن دول بنضيفهم احنا
}

const getRandomViews = (): number => Math.floor(Math.random() * 1000 + 100)
const getRandomLikes = (): number => Math.floor(Math.random() * 300 + 20)

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref<Blog[]>([])
  const likedPosts = ref<number[]>([])

  const fetchBlogs = async (): Promise<void> => {
    try {
      const res = await fetch('https://fakestoreapi.in/api/products')
      const data: FetchBlogsResponse = await res.json()
      blogs.value = data.products.map(
        (post): Blog => ({
          id: Number(post.id),
          title: String(post.title),
          description: String(post.description),
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
