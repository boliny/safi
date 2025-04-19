<template>
  <div class="container" v-if="blog">
    <h1 class="title">{{ blog.title }}</h1>
    <img
      :src="blog.thumbnail"
      alt="Blog image"
      class="blog-img"
      v-if="blog.thumbnail"
    />
    <p class="blog-content">{{ blog.content }}</p>
  </div>
  <div v-else class="loading">Loading...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const blog = ref(null)

onMounted(async () => {
  try {
    // هنا بنفترض إنه عندك API بهذا الشكل
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    blog.value = data
  } catch (error) {
    console.error('Error fetching blog:', error)
  }
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
.blog-img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}
.blog-content {
  font-size: 16px;
  line-height: 1.6;
}
.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
}
</style>
