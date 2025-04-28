<template>
  <div class="max-w-2xl mx-auto p-10">
    <h1 class="text-2xl font-bold mb-4 text-center">Men's Registration Form</h1>
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
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

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

const submitForm = async () => {
  const formData = new FormData()
  for (const key in form) {
    if (Array.isArray(form[key as keyof typeof form])) {
      ;(form[key as keyof typeof form] as File[]).forEach((file) => {
        formData.append(key, file)
      })
    } else if (
      form[key as keyof typeof form] !== null &&
      form[key as keyof typeof form] !== 0
    ) {
      formData.append(key, String(form[key as keyof typeof form]))
    }
  }

  try {
    const res = await fetch('/api/register-men', {
      method: 'POST',
      body: formData,
    })
    await res.json()
    alert('Form submitted successfully!')
  } catch (err) {
    console.error(err)
    alert('An error occurred while submitting')
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
