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
        <!-- Basic inputs -->
        <input
          v-model="form.name"
          placeholder="Full Name"
          class="input"
          required
        />
        <input
          v-model="form.age"
          type="number"
          placeholder="Age"
          class="input"
          min="18"
          required
        />
        <input
          v-model="form.address"
          placeholder="Address"
          class="input"
          required
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="input"
          required
        />
        <input
          v-model="form.facebook"
          placeholder="Facebook Profile"
          class="input"
          required
        />
        <input
          v-model="form.phone"
          placeholder="Phone Number"
          class="input"
          required
        />
        <input v-model="form.birthdate" type="date" class="input" required />
        <input
          v-model="form.height"
          type="number"
          placeholder="Height (cm)"
          class="input"
          required
          min="50"
        />
        <input
          v-model="form.weight"
          type="number"
          placeholder="Weight (kg)"
          class="input"
          required
          min="30"
        />

        <!-- FRONT IMAGES -->
        <div
          class="flex flex-col gap-2"
          @dragover.prevent
          @drop="handleDrop($event, 'frontImages')"
        >
          <label class="font-medium text-gray-700"
            >Front Body Images (Optional)</label
          >

          <!-- Image upload -->
          <div
            class="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-600 text-sm hover:bg-gray-50 transition text-center min-h-[80px]"
            @click="triggerFileInput('front')"
          >
            📷 Click to upload or drag and drop images
          </div>

          <!-- Hidden input -->
          <input
            ref="frontInput"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFile($event, 'frontImages')"
          />

          <!-- Preview images -->
          <div class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="(img, index) in previews.frontImages"
              :key="'front-' + index"
              class="relative w-24 h-24"
            >
              <img :src="img.url" class="w-full h-full object-cover rounded" />
              <button
                type="button"
                @click="removeImage('frontImages', index)"
                class="absolute top-0 right-0 text-white bg-black bg-opacity-70 rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- BACK IMAGES -->
        <div
          class="flex flex-col gap-2"
          @dragover.prevent
          @drop="handleDrop($event, 'backImages')"
        >
          <label class="font-medium text-gray-700"
            >Back Body Images (Optional)</label
          >

          <!-- Image upload -->
          <div
            class="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-600 text-sm hover:bg-gray-50 transition text-center min-h-[80px]"
            @click="triggerFileInput('back')"
          >
            📷 Click to upload or drag and drop images
          </div>

          <!-- Hidden input -->
          <input
            ref="backInput"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFile($event, 'backImages')"
          />

          <!-- Preview images -->
          <div class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="(img, index) in previews.backImages"
              :key="'back-' + index"
              class="relative w-24 h-24"
            >
              <img :src="img.url" class="w-full h-full object-cover rounded" />
              <button
                type="button"
                @click="removeImage('backImages', index)"
                class="absolute top-0 right-0 text-white bg-black bg-opacity-70 rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                ×
              </button>
            </div>
          </div>
        </div>
        <!-- inbody IMAGES -->
        <div
          class="flex flex-col gap-2"
          @dragover.prevent
          @drop="handleDrop($event, 'inbodyImages')"
        >
          <label class="font-medium text-gray-700"
            >inbody report Images (Optional)</label
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
                @click="removeImage('inbodyImages', index)"
                class="absolute top-0 right-0 text-white bg-black bg-opacity-70 rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                ×
              </button>
            </div>
          </div>
        </div>
        <!-- Optional fields -->
        <input
          v-model="form.illness"
          placeholder="Write illnesses or leave empty"
          class="input"
        />
        <input
          v-model="form.injuries"
          placeholder="Write injuries or leave empty"
          class="input"
        />

        <!-- Select inputs -->
        <select v-model="form.level" class="input" required>
          <option disabled value="">Select Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <select v-model="form.consistency" class="input" required>
          <option disabled value="">Are you consistent?</option>
          <option>Consistent</option>
          <option>Inactive</option>
        </select>

        <select v-model="form.place" class="input" required>
          <option disabled value="">Workout Location</option>
          <option>Home</option>
          <option>Gym</option>
        </select>

        <input
          v-model="form.daysPerWeek"
          type="number"
          placeholder="Workout Days per Week"
          class="input"
          required
          min="1"
          max="7"
        />

        <button
          type="submit"
          class="bg-red-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition delay-75"
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
import { z } from 'zod'

// المخطط الأساسي للبيانات
const registrationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().min(18, 'You must be at least 18'),
  address: z.string().min(1, 'Address is required'),
  email: z.string().email('Invalid email'),
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
  frontImages: z.array(z.instanceof(File)).optional(),
  backImages: z.array(z.instanceof(File)).optional(),
  inbodyImages: z.array(z.instanceof(File)).optional(),
})

const submitForm = async () => {
  try {
    // نحاول التحقق من صحة البيانات أولًا
    const validated = registrationSchema.parse(form)

    // تجهيز البيانات للإرسال بعد التحقق
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

    // إرسال البيانات هنا
    console.log('Form is valid, sending...', validated)
    // const res = await fetch('/api/submit', { method: 'POST', body: formData })
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors)
      alert(error.errors.map((e) => e.message).join('\n'))
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
  inbodyImages: []
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
