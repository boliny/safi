<template>
  <section
    class="min-h-screen flex flex-col md:flex-row"
    :class="
      colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
    "
  >
    <!-- Left Image -->
    <div class="md:w-1/2 w-full">
      <NuxtImg
        src="/imgs/10.jpg"
        alt="Contact Image"
        class="w-full h-full object-cover min-h-[300px] md:min-h-screen"
        loading="lazy"
      />
    </div>

    <!-- Right Form Content -->
    <div class="md:w-1/2 w-full flex flex-col justify-center px-8 py-12">
      <div class="max-w-xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">Get in Touch</h2>
        <p class="mb-8">
          Have a question or want to work together? Fill out the form and I'll
          get back to you as soon as possible.
        </p>

        <form @submit.prevent="submitForm" class="space-y-6">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            class="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            v-model="form.message"
            rows="5"
            placeholder="Your Message"
            class="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            class="w-full cursor-pointer bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = () => {
  alert(
    `Message sent!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`
  )
  form.value = { name: '', email: '', message: '' }
}

useHead({
  title: 'Contact Me',
  meta: [
    {
      name: 'description',
      content: 'Reach out for fitness coaching, questions or collaborations.',
    },
    { name: 'keywords', content: 'fitness, coaching, contact, message' },
    { name: 'author', content: 'Online Coach' },
  ],
})
</script>

<style scoped>
/* Optional: custom styling */
</style>
