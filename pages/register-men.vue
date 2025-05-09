<template>
  <div
    :data-theme="colorMode"
    :class="
      colorMode === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'
    "
  >
    <div
      class="max-w-2xl mx-auto p-10"
      :class="
        colorMode === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'
      "
    >
      <h1 class="text-2xl font-bold mb-4 text-center">
        Men's Registration Form
      </h1>
      <form class="grid grid-cols-1 gap-4" @submit.prevent="submitForm">
        <!-- Basic Fields -->
        <div class="flex flex-col gap-2">
          <label for="name" class="font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            v-model="form.name"
            placeholder="Enter your full name"
            class="input"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="age" class="font-medium text-gray-700">Age</label>
          <input
            id="age"
            v-model="form.age"
            type="number"
            placeholder="Enter your age"
            class="input"
            min="18"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="address" class="font-medium text-gray-700">Address</label>
          <input
            id="address"
            v-model="form.address"
            placeholder="Enter your address"
            class="input"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="font-medium text-gray-700"
            >Email Address</label
          >
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="input"
            @blur="validateEmail"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="facebook" class="font-medium text-gray-700"
            >Facebook Profile</label
          >
          <input
            id="facebook"
            v-model="form.facebook"
            placeholder="Enter your Facebook profile URL"
            class="input"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="phone" class="font-medium text-gray-700"
            >Phone Number</label
          >
          <input
            id="phone"
            type="tel"
            v-model="form.phone"
            placeholder="Enter your phone number"
            class="input"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="birthdate" class="font-medium text-gray-700"
            >Birthdate</label
          >
          <input
            id="birthdate"
            v-model="form.birthdate"
            type="date"
            class="input"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="height" class="font-medium text-gray-700"
            >Height (cm)</label
          >
          <input
            id="height"
            v-model="form.height"
            type="number"
            placeholder="Enter your height"
            class="input"
            min="50"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="weight" class="font-medium text-gray-700"
            >Weight (kg)</label
          >
          <input
            id="weight"
            v-model="form.weight"
            type="number"
            placeholder="Enter your weight"
            class="input"
            min="30"
            autocomplete="off"
          />
        </div>

        <!-- Front Body Images -->
        <div
          class="flex flex-col gap-2"
          @dragover.prevent
          @drop="handleDrop($event, 'frontImages')"
        >
          <label class="font-medium text-gray-700"
            >Front Body Images (Optional)</label
          >
          <div
            class="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-600 text-sm hover:bg-gray-50 transition text-center min-h-[80px]"
            @click="triggerFileInput('front')"
          >
            📷 Click to upload or drag and drop images
          </div>
          <input
            ref="frontInput"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFile($event, 'frontImages')"
            autocomplete="off"
          />
          <div class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="(img, index) in previews.frontImages"
              :key="'front-' + index"
              class="relative w-24 h-24"
            >
              <img :src="img.url" class="w-full h-full object-cover rounded" />
              <button
                type="button"
                class="absolute top-0 right-0 text-white bg-black bg-opacity-70 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                @click="removeImage('frontImages', index)"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- Back Body Images -->
        <div
          class="flex flex-col gap-2"
          @dragover.prevent
          @drop="handleDrop($event, 'backImages')"
        >
          <label class="font-medium text-gray-700"
            >Back Body Images (Optional)</label
          >
          <div
            class="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-600 text-sm hover:bg-gray-50 transition text-center min-h-[80px]"
            @click="triggerFileInput('back')"
          >
            📷 Click to upload or drag and drop images
          </div>
          <input
            ref="backInput"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFile($event, 'backImages')"
            autocomplete="off"
          />
          <div class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="(img, index) in previews.backImages"
              :key="'back-' + index"
              class="relative w-24 h-24"
            >
              <img :src="img.url" class="w-full h-full object-cover rounded" />
              <button
                type="button"
                class="absolute top-0 right-0 text-white bg-black bg-opacity-70 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                @click="removeImage('backImages', index)"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- Inbody Report Images -->
        <div
          class="flex flex-col gap-2"
          @dragover.prevent
          @drop="handleDrop($event, 'inbodyImages')"
        >
          <label class="font-medium text-gray-700"
            >Inbody Report Images (Optional)</label
          >
          <div
            class="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-600 text-sm hover:bg-gray-50 transition text-center min-h-[80px]"
            @click="triggerFileInput('inbody')"
          >
            📷 Click to upload or drag and drop images
          </div>
          <input
            ref="inbodyInput"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFile($event, 'inbodyImages')"
            autocomplete="off"
          />
          <div class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="(img, index) in previews.inbodyImages"
              :key="'inbody-' + index"
              class="relative w-24 h-24"
            >
              <img :src="img.url" class="w-full h-full object-cover rounded" />
              <button
                type="button"
                class="absolute top-0 right-0 text-white bg-black bg-opacity-70 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                @click="removeImage('inbodyImages', index)"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- Optional Fields -->
        <div class="flex flex-col gap-2">
          <label for="illness" class="font-medium text-gray-700"
            >Illnesses (Optional)</label
          >
          <input
            id="illness"
            v-model="form.illness"
            placeholder="List any illnesses or leave empty"
            class="input"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="injuries" class="font-medium text-gray-700"
            >Injuries (Optional)</label
          >
          <input
            id="injuries"
            v-model="form.injuries"
            placeholder="List any injuries or leave empty"
            class="input"
            autocomplete="off"
          />
        </div>

        <!-- Dropdown Fields -->
        <div class="flex flex-col gap-2">
          <label for="level" class="font-medium text-gray-700"
            >Fitness Level</label
          >
          <select id="level" v-model="form.level" class="input">
            <option disabled value="">Select your level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label for="consistency" class="font-medium text-gray-700"
            >Consistency</label
          >
          <select id="consistency" v-model="form.consistency" class="input">
            <option disabled value="">Are you consistent?</option>
            <option>Consistent</option>
            <option>Inactive</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label for="place" class="font-medium text-gray-700"
            >Workout Location</label
          >
          <select id="place" v-model="form.place" class="input">
            <option disabled value="">Select workout location</option>
            <option>Home</option>
            <option>Gym</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label for="daysPerWeek" class="font-medium text-gray-700"
            >Workout Days per Week</label
          >
          <input
            id="daysPerWeek"
            v-model="form.daysPerWeek"
            type="number"
            placeholder="Enter days per week"
            class="input"
            min="1"
            max="7"
            autocomplete="off"
          />
        </div>

        <button
          type="submit"
          class="bg-red-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-orange-700 transition delay-75"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useColorMode } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { z } from 'zod'

// Enhanced email validation schema
const registrationSchema = z.object({
  name: z.string().min(1, 'Name is '),
  age: z.number().min(18, 'You must be at least 18'),
  address: z.string().min(1, 'Address is '),
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is ')
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
  birthdate: z.string().min(1, 'Birthdate '),
  height: z.number().min(50, 'Minimum height is 50 cm'),
  weight: z.number().min(30, 'Minimum weight is 30 kg'),
  illness: z.string().optional(),
  injuries: z.string().optional(),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  consistency: z.enum(['Consistent', 'Inactive']),
  place: z.enum(['Home', 'Gym']),
  daysPerWeek: z.number().min(1).max(7),
  frontImages: z.array(z.instanceof(File)).optional(),
  backImages: z.array(z.instanceof(File)).optional(),
  inbodyImages: z.array(z.instanceof(File)).optional(),
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

// Real-time email validation
const validateEmail = () => {
  try {
    registrationSchema.shape.email.parse(form.email)
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((e) => {
        toast.warning(e.message)
      })
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
  age: number | null
  address: string
  email: string
  facebook: string
  phone: string
  birthdate: string
  height: number | null
  weight: number | null
  illness: string
  injuries: string
  level: string
  consistency: string
  place: string
  daysPerWeek: number | null
  frontImages: File[]
  backImages: File[]
  inbodyImages: File[]
}

interface PreviewData {
  frontImages: { url: string; file: File }[]
  backImages: { url: string; file: File }[]
  inbodyImages: { url: string; file: File }[]
}

const form = reactive<FormData>({
  name: '',
  age: null,
  address: '',
  email: '',
  facebook: '',
  phone: '',
  birthdate: '',
  height: null,
  weight: null,
  illness: '',
  injuries: '',
  level: '',
  consistency: '',
  place: '',
  daysPerWeek: null,
  frontImages: [],
  backImages: [],
  inbodyImages: [],
})

const previews = reactive<PreviewData>({
  frontImages: [],
  backImages: [],
  inbodyImages: [],
})

const frontInput = ref<HTMLInputElement | null>(null)
const backInput = ref<HTMLInputElement | null>(null)
const inbodyInput = ref<HTMLInputElement | null>(null)
const isUploading = ref(false)

const triggerFileInput = (side: string) => {
  if (side === 'front' && frontInput.value) frontInput.value.click()
  if (side === 'back' && backInput.value) backInput.value.click()
  if (side === 'inbody' && inbodyInput.value) inbodyInput.value.click()
}

const handleFile = (event: Event, key: keyof FormData) => {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files as FileList)
  isUploading.value = true
  files.forEach((file) => {
    if (Array.isArray(form[key])) {
      ;(form[key] as File[]).push(file)
      const reader = new FileReader()
      reader.onload = () => {
        previews[key as keyof PreviewData].push({
          url: reader.result as string,
          file,
        })
        isUploading.value = false
      }
      reader.readAsDataURL(file)
    }
  })
}

const handleDrop = (event: DragEvent, key: keyof FormData) => {
  const files = Array.from(event.dataTransfer?.files as FileList)
  files.forEach((file) => {
    if (Array.isArray(form[key])) {
      ;(form[key] as File[]).push(file)
      const reader = new FileReader()
      reader.onload = () => {
        previews[key as keyof PreviewData].push({
          url: reader.result as string,
          file,
        })
      }
      reader.readAsDataURL(file)
    }
  })
}

const removeImage = (key: keyof FormData, index: number) => {
  if (Array.isArray(form[key])) {
    ;(form[key] as File[]).splice(index, 1)
    previews[key as keyof PreviewData].splice(index, 1)
  }
}
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
  color: #333;
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
  color: #9da3ad;
}

input:focus::placeholder,
select:focus::placeholder,
textarea:focus::placeholder {
  color: #9da3ad;
}

[data-theme='dark'] input,
[data-theme='dark'] select,
[data-theme='dark'] textarea {
  background-color: #333;
  color: #fff;
}

[data-theme='dark'] input::placeholder,
[data-theme='dark'] select::placeholder,
[data-theme='dark'] textarea::placeholder {
  color: #bbb;
}

[data-theme='light'] input,
[data-theme='light'] select,
[data-theme='light'] textarea {
  background-color: #f9f9f9;
  color: #333;
}

[data-theme='light'] input::placeholder,
[data-theme='light'] select::placeholder,
[data-theme='light'] textarea::placeholder {
  color: #9da3ad;
}
</style>
