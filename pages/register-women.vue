<template>
  <div
    :data-theme="colorMode"
    :class="
      colorMode === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'
    "
  >
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
        <input
          v-model="form.age"
          type="number"
          placeholder="Age"
          class="input"
        />
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
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { z } from 'zod'

// Enhanced email validation schema
const registrationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().min(18, 'You must be at least 18'),
  address: z.string().min(1, 'Address is required'),
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is required')
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .refine(
      (email) => {
        const [, domain] = email.split('@')
        const commonDomains = [
          'gmail.com',
          'yahoo.com',
          'hotmail.com',
          'outlook.com',
          'icloud.com',
          'aol.com',
        ]
        return (
          commonDomains.includes(domain) ||
          /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain)
        )
      },
      { message: 'Please use a valid email domain' }
    )
    .refine(
      (email) => !/(\.\.|\.-|-\.)/.test(email),
      'Email cannot contain consecutive dots or dot-hyphen combinations'
    ),
  facebook: z.string().url('Invalid Facebook URL'),
  phone: z.string().min(7, 'Phone number too short'),
  birthdate: z.string().min(1, 'Birthdate required'),
  height: z.number().min(50, 'Minimum height is 50 cm'),
  weight: z.number().min(30, 'Minimum weight is 30 kg'),
  illness: z.string().optional(),
  injuries: z.string().optional(),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  consistency: z.enum(['Consistent', 'Inactive']),
  place: z.enum(['Home', 'Gym']),
  daysPerWeek: z.number().min(1).max(7),
})

const submitForm = async () => {
  try {
    const validated = registrationSchema.parse(form)
    const formData = new FormData()
    for (const key in validated) {
      const value = validated[key as keyof typeof validated]
      if (Array.isArray(value)) {
        value.forEach((file) => {
          formData.append(`${key}[]`, file)
        })
      } else {
        formData.append(key, String(value))
      }
    }

    console.log('Form is valid, sending...', validated)
    toast.success('Form submitted successfully!')
    // Example: Send data to an API
    // const res = await fetch('/api/submit', { method: 'POST', body: formData })
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors)
      error.errors.forEach((e) => {
        toast.error(e.message)
      })
    } else {
      toast.error('An unexpected error occurred')
    }
  }
}

const colorMode = useColorMode({
  emitAuto: true,
  modes: {
    dark: 'dark',
    light: 'light',
  },
  storageKey: 'vueuse-color-scheme',
})

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
</script>

<style scoped>
.input,
select,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  color: #333; /* اللون الافتراضي للنص داخل الحقول */
}

.input:focus,
select:focus,
textarea:focus {
  border-color: #3b82f6;
  outline: none;
  background-color: #ffffff;
}

input::placeholder,
select::placeholder,
textarea::placeholder {
  color: #9da3ad; /* اللون الافتراضي للـ placeholder */
}

/* تخصيص اللون للنص داخل الحقول و الـ placeholder بناءً على الـ colorMode */
input:focus::placeholder,
select:focus::placeholder,
textarea:focus::placeholder {
  color: #9da3ad; /* نفس اللون عند التركيز */
}

[data-theme='dark'] input,
[data-theme='dark'] select,
[data-theme='dark'] textarea {
  background-color: #333; /* لون الخلفية في الوضع الداكن */
  color: #fff; /* النص داخل الحقول في الوضع الداكن */
}

[data-theme='dark'] input::placeholder,
[data-theme='dark'] select::placeholder,
[data-theme='dark'] textarea::placeholder {
  color: #bbb; /* لون الـ placeholder في الوضع الداكن */
}

/* تخصيص اللون للنص داخل الحقول و الـ placeholder في الوضع الفاتح */
[data-theme='light'] input,
[data-theme='light'] select,
[data-theme='light'] textarea {
  background-color: #f9f9f9; /* خلفية فاتحة في الوضع العادي */
  color: #333; /* نص مظلم في الوضع العادي */
}

[data-theme='light'] input::placeholder,
[data-theme='light'] select::placeholder,
[data-theme='light'] textarea::placeholder {
  color: #9da3ad; /* لون الـ placeholder في الوضع الفاتح */
}
</style>
