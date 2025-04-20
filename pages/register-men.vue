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

        <!-- زر اختيار الصور -->
        <div
          class="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-600 text-sm hover:bg-gray-50 transition text-center min-h-[80px]"
          @click="triggerFileInput('front')"
        >
          📷 Click to upload or drag and drop images
        </div>

        <!-- input خارج clickable area -->
        <input
          ref="frontInput"
          type="file"
          accept="image/*"
          multiple
          class="hidden"
          @change="handleFile($event, 'frontImages')"
        />

        <!-- عرض الصور -->
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

        <!-- زر اختيار الصور -->
        <div
          class="flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-600 text-sm hover:bg-gray-50 transition text-center min-h-[80px]"
          @click="triggerFileInput('back')"
        >
          📷 Click to upload or drag and drop images
        </div>

        <!-- input خارج clickable area -->
        <input
          ref="backInput"
          type="file"
          accept="image/*"
          multiple
          class="hidden"
          @change="handleFile($event, 'backImages')"
        />

        <!-- عرض الصور -->
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

      <!-- Optional inputs -->
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

      <!-- Selects -->
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

<script setup>
import { reactive, ref } from 'vue'

const frontInput = ref(null)
const backInput = ref(null)

const previews = reactive({
  frontImages: [],
  backImages: [],
})

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
  illness: '',
  injuries: '',
  level: '',
  consistency: '',
  place: '',
  daysPerWeek: '',
  frontImages: [],
  backImages: [],
})

const triggerFileInput = (side) => {
  if (side === 'front') frontInput.value.click()
  if (side === 'back') backInput.value.click()
}

const handleFile = (event, key) => {
  const files = Array.from(event.target.files)
  files.forEach((file) => {
    form[key].push(file)
    const reader = new FileReader()
    reader.onload = () => {
      previews[key].push({ url: reader.result, file })
    }
    reader.readAsDataURL(file)
  })
}

const handleDrop = (event, key) => {
  const files = Array.from(event.dataTransfer.files)
  files.forEach((file) => {
    form[key].push(file)
    const reader = new FileReader()
    reader.onload = () => {
      previews[key].push({ url: reader.result, file })
    }
    reader.readAsDataURL(file)
  })
}

const removeImage = (key, index) => {
  form[key].splice(index, 1)
  previews[key].splice(index, 1)
}

const submitForm = async () => {
  const formData = new FormData()
  for (const key in form) {
    if (Array.isArray(form[key])) {
      form[key].forEach((file) => {
        formData.append(key, file)
      })
    } else if (form[key]) {
      formData.append(key, form[key])
    }
  }

  try {
    const res = await fetch('/api/register-men', {
      method: 'POST',
      body: formData,
    })
    await res.json()
    alert('Submitted successfully!')
  } catch (err) {
    console.error(err)
    alert('Error while submitting')
  }
}
useHead({
  title: 'تسجيل الرجال - موقع التدريب',
  meta: [
    {
      name: 'description',
      content: 'سجلي الآن في برنامج التدريب الخاص بالرجال',
    },
    {
      name: 'keywords',
      content: 'تسجيل, تدريب رجال, استمارة, جيم, تمارين منزلية',
    },
    { name: 'author', content: 'اسم المدرب أو اسم الموقع' },
    { property: 'og:title', content: 'تسجيل الرجال - موقع التدريب' },
    {
      property: 'og:description',
      content: 'انضمي إلى أقوى برامج التدريب المخصصة للرجال',
    },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<style scoped>
.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  width: 100%;
}
</style>
