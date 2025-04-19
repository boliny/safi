<template>
  <section class="bg-cream flex flex-col md:flex-row-reverse items-center">
    <!-- Image Section -->
    <div class="md:w-1/3 w-full">
      <NuxtImg
        src="https://themes.pixelwars.org/efor/demo-04/wp-content/uploads/sites/6/2018/09/011-550x362.jpg"
        alt="Contact Image"
        class="w-full h-screen"
      />
    </div>

    <!-- Contact Form Section -->
    <div class="md:w-2/3 w-full px-4 md:px-8">
      <div class="text-center md:text-left">
        <p class="text-sm font-semibold text-gray-600">READY TO START?</p>
        <h2 class="text-3xl font-bold text-gray-900 mt-2">CONTACT ME</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-building"
          >
            <path d="M3 21h18M9 8v13M15 8v13M3 9l9-7 9 7v12H3V9z" />
          </svg>
          <p class="font-semibold">The Company Name Inc.</p>
        </div>
        <div class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-map-pin"
          >
            <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p>8901 Marmora Road, Glasgow, D04 89GR.</p>
        </div>
        <div class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-phone"
          >
            <path
              d="M22 16.92V19a2 2 0 0 1-2.18 2A19.74 19.74 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 .91l1.83 3.05a2 2 0 0 1-.45 2.54l-1.27 1a16 16 0 0 0 6.88 6.88l1-1.27a2 2 0 0 1 2.54-.45l3.05 1.83a2 2 0 0 1 .91 2z"
            />
          </svg>
          <p>+1 800 559 6580 / +1 800 889 9898</p>
        </div>
        <div class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path d="M4 4h16v16H4z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <p>mail@demolink.org</p>
        </div>
      </div>

      <div class="mt-8">
        <p class="text-center md:text-left font-semibold text-gray-700 mb-4">
          OR JUST DROP ME A LINE
        </p>
        <form
          class="grid grid-cols-1 md:grid-cols-2 gap-4"
          @submit.prevent="submitForm"
        >
          <input
            v-model="form.name"
            type="text"
            placeholder="NAME"
            class="input-field"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="EMAIL"
            class="input-field"
            required
          />
          <textarea
            v-model="form.message"
            placeholder="MESSAGE"
            class="input-field h-32 md:col-span-2"
            required
          />
        </form>
        <button
          type="submit"
          class="bg-black my-10 cursor-pointer text-white px-6 py-2 rounded-md md:w-auto flex items-center gap-2 md:col-span-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-send"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          Submit
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })

const submitForm = () => {
  alert(
    `Message Sent!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`
  )
  form.value = { name: '', email: '', message: '' } // Clear form
}
</script>

<style scoped>
.bg-cream {
  background-color: #fdfaf3;
}
.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}
.input-field:focus {
  border-color: #000;
}
button svg {
  margin-right: 8px;
}
</style>
