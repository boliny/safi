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
          Have a question or want to work together? Fill out the form and I’ll
          get back to you.
        </p>

        <form class="space-y-6" @submit.prevent="submitForm">
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
              @blur="validateField('name')"
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
                  : 'border-gray-300 focus:ring-gray-500'
              "
              @blur="validateField('email')"
            />

            <p v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </p>
          </div>

          <!-- Message -->
          <div>
            <textarea
              v-model="form.message"
              @blur="validateField('message')"
              :maxlength="500"
              rows="5"
              placeholder="Your Message (20–500 characters)"
              class="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 resize-none"
              :class="
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-gray-500'
              "
            />
            <p
              class="text-sm mt-1 text-right"
              :class="
                form.message.length > maxLength
                  ? 'text-red-500'
                  : 'text-gray-500'
              "
            >
              {{ form.message.length }} / {{ maxLength }} characters
            </p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Send Message
          </button>

          <!-- Success Message -->
          <p
            v-if="successMessage"
            class="text-green-600 mt-4 text-center font-medium"
          >
            {{ successMessage }}
          </p>
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

const errors = ref({
  name: '',
  email: '',
  message: '',
})

const successMessage = ref('')

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

const submitForm = () => {
  if (validateForm()) {
    successMessage.value = 'Message sent successfully!'
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      successMessage.value = ''
    }, 4000)
  }
}
const validateField = (field) => {
  const value = form.value[field].trim()
  errors.value[field] = ''

  switch (field) {
    case 'name':
      if (!value) {
        errors.value.name = 'Name is required.'
      }
      break
    case 'email': {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!value) {
        errors.value.email = 'Email is required.'
      } else if (!emailRegex.test(value)) {
        errors.value.email = 'Enter a valid email address.'
      }
      break
    }
    case 'message':
      if (!value) {
        errors.value.message = 'Message is required.'
      } else if (value.length < 20) {
        errors.value.message = 'Message must be at least 20 characters.'
      } else if (value.length > maxLength) {
        errors.value.message = `Message must not exceed ${maxLength} characters.`
      }
      break
  }
}
const maxLength = 500

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
