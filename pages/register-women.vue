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

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

interface FormData {
  name: string
  age: string
  address: string
  email: string
  facebook: string
  phone: string
  birthdate: string
  height: string
  weight: string
  neck: string
  waist: string
  injuries: string
  injuryDetails: string
  diseases: string
  diseaseDetails: string
  level: string
  continuity: string
  trainingPlace: string
  trainingDays: string
}

const form = reactive<FormData>({
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
</script>

<style scoped>
.input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.input:focus {
  border-color: #3b82f6;
  outline: none;
  background-color: #ffffff;
}
</style>
