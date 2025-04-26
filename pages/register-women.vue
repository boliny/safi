<!-- pages/register-women.vue -->
<template>
  <div class="max-w-2xl mx-auto p-10">
    <h1 class="text-2xl font-bold mb-4 text-center">
      Women's Registration Form
    </h1>
    <form
      class="flex flex-col gap-4 p-6 mt-5 max-w-xl mx-auto"
      @submit.prevent="submitForm"
    >
      <!-- Basic fields -->
      <input
        v-model="form.name"
        type="text"
        placeholder="Full Name"
        class="input"
      />
      <input v-model="form.age" type="number" placeholder="Age" class="input" />
      <input
        v-model="form.address"
        type="text"
        placeholder="Address"
        class="input"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="input"
      />
      <input
        v-model="form.facebook"
        type="text"
        placeholder="Facebook Profile Link"
        class="input"
      />
      <input
        v-model="form.phone"
        type="text"
        placeholder="Phone Number"
        class="input"
      />
      <input
        v-model="form.birthdate"
        type="date"
        placeholder="Date of Birth"
        class="input"
      />
      <input
        v-model="form.height"
        type="number"
        step="0.1"
        placeholder="Height (cm)"
        class="input"
      />
      <input
        v-model="form.weight"
        type="number"
        step="0.1"
        placeholder="Weight (kg)"
        class="input"
      />

      <!-- New fields for women -->
      <input
        v-model="form.neck"
        type="number"
        step="0.1"
        placeholder="Neck Size (cm) - optional"
        class="input"
      />
      <input
        v-model="form.waist"
        type="number"
        step="0.1"
        placeholder="Waist Size (cm) - optional"
        class="input"
      />

      <!-- Injuries -->
      <select v-model="form.injuries" class="input">
        <option value="">Do you have any injuries?</option>
        <option value="none">None</option>
        <option value="yes">Yes (please specify below)</option>
      </select>
      <textarea
        v-if="form.injuries === 'yes'"
        v-model="form.injuryDetails"
        placeholder="List your injuries"
        class="input col-span-2"
      />

      <!-- Diseases -->
      <select v-model="form.diseases" class="input">
        <option value="">Do you have any diseases?</option>
        <option value="none">None</option>
        <option value="yes">Yes (please specify below)</option>
      </select>
      <textarea
        v-if="form.diseases === 'yes'"
        v-model="form.diseaseDetails"
        placeholder="List your diseases"
        class="input col-span-2"
      />

      <!-- Level -->
      <select v-model="form.level" class="input">
        <option value="">Training Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <!-- Continuity -->
      <select v-model="form.continuity" class="input">
        <option value="">Training Consistency</option>
        <option value="consistent">Consistent</option>
        <option value="paused">Paused</option>
      </select>

      <!-- Training Place -->
      <select v-model="form.trainingPlace" class="input">
        <option value="">Training Location</option>
        <option value="home">Home</option>
        <option value="gym">Gym</option>
      </select>

      <!-- Training Days -->
      <input
        v-model="form.trainingDays"
        type="number"
        placeholder="Days per week"
        class="input"
      />

      <!-- Feedback Message -->
      <div
        v-if="loading"
        class="col-span-2 text-center text-orange-600 font-semibold"
      >
        Submitting...
      </div>
      <div
        v-if="message"
        class="col-span-2 text-center font-semibold"
        :class="messageColor"
      >
        {{ message }}
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="col-span-2 bg-red-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded cursor-pointer transition"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  age: '',
  address: '',
  email: '',
  facebook: '',
  phone: '',
  birthdate: '',
  height: '',
  weight: '',
  neck: '',
  waist: '',
  injuries: '',
  injuryDetails: '',
  diseases: '',
  diseaseDetails: '',
  level: '',
  continuity: '',
  trainingPlace: '',
  trainingDays: '',
})

const loading = ref(false)
const message = ref('')
const messageColor = computed(() =>
  message.value.includes('success') ? 'text-green-600' : 'text-red-600'
)

const submitForm = async () => {
  loading.value = true
  message.value = ''
  try {
    const res = await fetch('/api/register-women', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!res.ok) throw new Error('Error submitting form')
    message.value = 'Form submitted successfully!'
  } catch (e) {
    message.value = 'There was an error submitting the form.'
    console.error(e)
  } finally {
    loading.value = false
  }
}
useHead({
  title: "Women's Registration Form | Personal Training Program",
  meta: [
    {
      name: 'description',
      content:
        'Fill out the women’s registration form to join a customized fitness program tailored to your needs and goals.',
    },
    {
      name: 'keywords',
      content:
        'women training, registration form, female fitness, home workouts, gym program, personal coaching',
    },
    { name: 'author', content: 'Coach Name or Website Name' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      property: 'og:title',
      content: "Women's Registration Form | Personal Training Program",
    },
    {
      property: 'og:description',
      content:
        'Join a professional fitness coaching program for women, customized to help you reach your personal health goals.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yourdomain.com/register-women' },
    {
      property: 'og:image',
      content: 'https://yourdomain.com/og-images/women-register.png',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: "Women's Registration Form | Personal Training Program",
    },
    {
      name: 'twitter:description',
      content:
        'Sign up for a women-only training program and get personalized coaching at home or in the gym.',
    },
    {
      name: 'twitter:image',
      content: 'https://yourdomain.com/og-images/women-register.png',
    },
  ],
})
</script>
