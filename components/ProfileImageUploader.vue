<template>
  <div class="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-800">تحميل صورة البروفايل</h2>
    </div>

    <div class="flex flex-col items-center space-y-4">
      <label
        class="cursor-pointer relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition"
      >
        <input type="file" class="hidden" @change="handleImageChange" />
        <img
          :src="selectedImage || defaultImage"
          alt="Preview"
          class="w-full h-full object-cover"
        />
        <div
          v-if="isUploading"
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm"
        >
          جاري الرفع...
        </div>
      </label>

      <button
        type="button"
        @click="submitForm"
        :disabled="isUploading"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isUploading ? 'جارٍ الرفع...' : 'حفظ الصورة' }}
      </button>

      <p
        v-if="uploadStatus"
        :class="uploadStatus === 'success' ? 'text-green-600' : 'text-red-600'"
      >
        {{ uploadMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedImage = ref(null)
const defaultImage = '/default-avatar.png' // غيّره حسب احتياجك
const form = ref({ avatar: null })

const isUploading = ref(false)
const uploadStatus = ref(null) // "success" or "error"
const uploadMessage = ref('')

const handleImageChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const validTypes = ['image/jpeg', 'image/png', 'image/webp']
  const maxSize = 5 * 1024 * 1024

  if (!validTypes.includes(file.type)) {
    uploadStatus.value = 'error'
    uploadMessage.value = 'الرجاء اختيار صورة بصيغة JPEG أو PNG أو WEBP'
    return
  }

  if (file.size > maxSize) {
    uploadStatus.value = 'error'
    uploadMessage.value = 'حجم الصورة يجب أن يكون أقل من 5 ميجا'
    return
  }

  selectedImage.value = URL.createObjectURL(file)
  form.value.avatar = file

  uploadStatus.value = null
  uploadMessage.value = ''
}

const submitForm = async () => {
  if (!form.value.avatar) {
    uploadStatus.value = 'error'
    uploadMessage.value = 'برجاء اختيار صورة أولاً'
    return
  }

  isUploading.value = true
  uploadStatus.value = null
  uploadMessage.value = ''

  const formData = new FormData()
  formData.append('avatar', form.value.avatar)

  const { error } = await useFetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  if (error.value) {
    uploadStatus.value = 'error'
    uploadMessage.value = 'حدث خطأ أثناء رفع الصورة'
  } else {
    uploadStatus.value = 'success'
    uploadMessage.value = 'تم حفظ الصورة بنجاح!'
  }

  isUploading.value = false
}
</script>
