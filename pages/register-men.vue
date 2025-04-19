// pages/register-men.vue
<template>
  <div class="max-w-2xl mx-auto p-10">
    <h1 class="text-2xl font-bold mb-4">Men's Registration Form</h1>
    <form class="grid grid-cols-1 gap-4" @submit.prevent="submitForm">
      <input
        v-model="form.name"
        placeholder="Full Name"
        class="input"
        required
      >
      <input
        v-model="form.age"
        type="number"
        placeholder="Age"
        class="input"
        required
      >
      <input
        v-model="form.address"
        placeholder="Address"
        class="input"
        required
      >
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="input"
        required
      >
      <input
        v-model="form.facebook"
        placeholder="Facebook Profile"
        class="input"
        required
      >
      <input
        v-model="form.phone"
        placeholder="Phone Number"
        class="input"
        required
      >
      <input v-model="form.birthdate" type="date" class="input" required >
      <input
        v-model="form.height"
        type="number"
        placeholder="Height (cm)"
        class="input"
        required
      >
      <input
        v-model="form.weight"
        type="number"
        placeholder="Weight (kg)"
        class="input"
        required
      >

      <div>
        <label>Front Body Image (Optional)</label>
        <input
          type="file"
          accept="image/*"
          @change="handleFile($event, 'frontImage')"
        >
      </div>
      <div>
        <label>Back Body Image (Optional)</label>
        <input
          type="file"
          accept="image/*"
          @change="handleFile($event, 'backImage')"
        >
      </div>

      <div>
        <label>Do you have any illnesses?</label>
        <input
          v-model="form.illness"
          placeholder="Write illnesses or leave empty"
          class="input"
        >
      </div>

      <div>
        <label>Do you have any injuries?</label>
        <input
          v-model="form.injuries"
          placeholder="Write injuries or leave empty"
          class="input"
        >
      </div>

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
      >

      <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded">
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
.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  width: 100%;
}
</style>
