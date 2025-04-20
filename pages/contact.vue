<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h1 class="text-3xl font-bold text-center text-red-600 mb-6">
        Men's Registration
      </h1>

      <form
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
        @submit.prevent="submitForm"
      >
        <!-- Name -->
        <div>
          <label class="block text-gray-700">Full Name</label>
          <input
            v-model="form.name"
            placeholder="Full Name"
            class="input"
            required
          >
        </div>

        <!-- Age -->
        <div>
          <label class="block text-gray-700">Age</label>
          <input
            v-model="form.age"
            type="number"
            placeholder="Age"
            class="input"
            required
          >
        </div>

        <!-- Address -->
        <div>
          <label class="block text-gray-700">Address</label>
          <input
            v-model="form.address"
            placeholder="Address"
            class="input"
            required
          >
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="input"
            required
          >
        </div>

        <!-- Facebook -->
        <div>
          <label class="block text-gray-700">Facebook Profile</label>
          <input
            v-model="form.facebook"
            placeholder="Facebook Profile"
            class="input"
            required
          >
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-gray-700">Phone Number</label>
          <input
            v-model="form.phone"
            placeholder="Phone Number"
            class="input"
            required
          >
        </div>

        <!-- Birthdate -->
        <div>
          <label class="block text-gray-700">Birthdate</label>
          <input v-model="form.birthdate" type="date" class="input" required >
        </div>

        <!-- Height -->
        <div>
          <label class="block text-gray-700">Height (cm)</label>
          <input
            v-model="form.height"
            type="number"
            placeholder="Height (cm)"
            class="input"
            required
          >
        </div>

        <!-- Weight -->
        <div>
          <label class="block text-gray-700">Weight (kg)</label>
          <input
            v-model="form.weight"
            type="number"
            placeholder="Weight (kg)"
            class="input"
            required
          >
        </div>

        <!-- Front Body Image -->
        <div class="col-span-2">
          <label class="block text-gray-700">Front Body Image (Optional)</label>
          <div class="flex flex-col items-center justify-center">
            <input
              type="file"
              accept="image/*"
              class="file-input"
              @change="handleFile($event, 'frontImage')"
            >
            <span class="text-sm text-gray-500">Choose your front image</span>
          </div>
        </div>

        <!-- Back Body Image -->
        <div class="col-span-2">
          <label class="block text-gray-700">Back Body Image (Optional)</label>
          <div class="flex flex-col items-center justify-center">
            <input
              type="file"
              accept="image/*"
              class="file-input"
              @change="handleFile($event, 'backImage')"
            >
            <span class="text-sm text-gray-500">Choose your back image</span>
          </div>
        </div>

        <!-- Illness -->
        <div>
          <label class="block text-gray-700">Illness</label>
          <select v-model="form.illness" class="input" required>
            <option value="">Select Illness</option>
            <option>None</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Injury -->
        <div>
          <label class="block text-gray-700">Injury</label>
          <select v-model="form.injuries" class="input" required>
            <option value="">Select Injury</option>
            <option>None</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Level -->
        <div>
          <label class="block text-gray-700">Level</label>
          <select v-model="form.level" class="input" required>
            <option disabled value="">Select Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <!-- Consistency -->
        <div>
          <label class="block text-gray-700">Consistency</label>
          <select v-model="form.consistency" class="input" required>
            <option disabled value="">Are you consistent?</option>
            <option>Consistent</option>
            <option>Inactive</option>
          </select>
        </div>

        <!-- Workout Location -->
        <div>
          <label class="block text-gray-700">Workout Location</label>
          <select v-model="form.place" class="input" required>
            <option disabled value="">Workout Location</option>
            <option>Home</option>
            <option>Gym</option>
          </select>
        </div>

        <!-- Workout Days per Week -->
        <div>
          <label class="block text-gray-700">Workout Days per Week</label>
          <input
            v-model="form.daysPerWeek"
            type="number"
            placeholder="Workout Days per Week"
            class="input"
            required
          >
        </div>

        <!-- Submit Button -->
        <div class="col-span-2 text-center">
          <button type="submit" class="submit-btn">Submit</button>
        </div>
      </form>
    </div>
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
  frontImage: null,
  backImage: null,
  illness: '',
  injuries: '',
  level: '',
  consistency: '',
  place: '',
  daysPerWeek: '',
})

const handleFile = (event, key) => {
  const file = event.target.files[0]
  if (file) form[key] = file
}

const submitForm = async () => {
  const formData = new FormData()
  for (const key in form) {
    if (form[key]) formData.append(key, form[key])
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
</script>

<style scoped>


@media (min-width: 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
