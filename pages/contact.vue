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
        src="/imgs/8.jpg"
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
          <!-- Name -->
          <div>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2"
              :class="
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-red-500'
              "
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">
              {{ errors.name }}
            </p>
          </div>

          <!-- Email -->
          <div>
            <input
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              class="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2"
              :class="
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-red-500'
              "
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </p>
          </div>

          <!-- Message -->
          <div>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Your Message (at least 20 characters)"
              class="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 resize-none"
              :class="
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-red-500'
              "
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">
              {{ errors.message }}
            </p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-all duration-300"
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

// Theme
const colorMode = useColorMode()

// Form Data
const form = ref({
  name: '',
  email: '',
  message: '',
})

// Error Handling
const errors = ref({
  name: '',
  email: '',
  message: '',
})

// Validate Inputs
const validateForm = () => {
  let isValid = true
  errors.value = { name: '', email: '', message: '' }

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required.'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required.'
    isValid = false
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Enter a valid email address.'
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required.'
    isValid = false
  } else if (form.value.message.trim().length < 20) {
    errors.value.message = 'Message must be at least 20 characters.'
    isValid = false
  }

  return isValid
}

// Handle Submit
const submitForm = () => {
  if (validateForm()) {
    alert(
      `Message sent!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`
    )
    form.value = { name: '', email: '', message: '' }
  }
}

// Page Metadata
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
