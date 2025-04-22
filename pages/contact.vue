<template>
  <section class="bg-cream flex flex-col md:flex-row-reverse items-center">
    <!-- Image Section -->
    <div class="md:w-1/2 w-full">
      <NuxtImg
        src="/imgs/10.JPG"
        alt="Contact Image"
        class="w-full h-full object-cover min-h-screen"
      />
    </div>

    <!-- Contact Form Section -->
    <div class="md:w-2/3 w-full px-6 md:px-12 py-10">
      <div class="text-center md:text-left">
        <p
          class="text-sm font-semibold text-orange-500 uppercase tracking-wide"
        >
          جاهز تبدأ؟
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-black mt-2">
          تواصل معي
        </h2>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
        <InfoItem icon="building" text="The Company Name Inc." />
        <InfoItem icon="map-pin" text="8901 Marmora Road, Glasgow, D04 89GR." />
        <InfoItem icon="phone" text="+1 800 559 6580 / +1 800 889 9898" />
        <InfoItem icon="mail" text="mail@demolink.org" />
      </div>

      <div class="mt-10">
        <p class="text-center md:text-left font-medium text-gray-800 mb-4">
          أو ابعتلي رسالة مباشرة
        </p>
        <form
          @submit.prevent="submitForm"
          class="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            v-model="form.name"
            type="text"
            placeholder="الاسم"
            class="input-field"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="البريد الإلكتروني"
            class="input-field"
            required
          />
          <textarea
            v-model="form.message"
            placeholder="الرسالة"
            class="input-field h-32 md:col-span-2 resize-none"
            required
          />
          <button
            type="submit"
            class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md md:col-span-2 transition-all duration-300 flex justify-center items-center gap-2"
          >
            <SendIcon />
            أرسل
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })

const submitForm = () => {
  alert(
    `تم إرسال الرسالة!\nالاسم: ${form.value.name}\nالبريد: ${form.value.email}\nالرسالة: ${form.value.message}`
  )
  form.value = { name: '', email: '', message: '' }
}

useHead({
  title: 'تواصل معي',
  meta: [
    { name: 'description', content: 'موقع التدريب' },
    { name: 'keywords', content: 'تدريب, تدريب جيم, تدريب منزلي' },
    { name: 'author', content: 'موقع التدريب' },
    { property: 'og:title', content: 'موقع التدريب' },
    { property: 'og:description', content: 'موقع التدريب' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<script>
const InfoItem = {
  props: ['icon', 'text'],
  template: `
    <div class="flex items-center gap-3 text-sm">
      <component :is="'feather-' + icon" class="w-5 h-5 text-black" />
      <p class="font-medium">{{ text }}</p>
    </div>
  `,
}
const SendIcon = {
  template: `
    <svg
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  `,
}
</script>

<style scoped>
.bg-cream {
  background-color: #fdfaf3;
}
.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 0.95rem;
  transition: border-color 0.3s;
}
.input-field:focus {
  border-color: #f97316; /* برتقالي */
}
</style>
