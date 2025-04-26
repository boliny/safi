<template>
  <div v-if="post" class="container">
    <h1 class="title">{{ post.title }}</h1>
    <NuxtImg
      v-if="post.image"
      :src="post.image"
      alt="Blog image"
      class="blog-img"
      loading="lazy"
    />
    <p class="blog-content">{{ post.description }}</p>
  </div>

  <div v-else class="loading">Post not found.</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useBlogsStore } from '@/stores/blogs'

const blogStore = useBlogsStore()
const route = useRoute()
const id = Number(route.params.id)

const post = computed(() => blogStore.blogs.find((p) => p.id === id))
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
