<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-center">BMR Calculator</h2>

    <div class="space-y-2">
      <label class="block font-medium">Gender:</label>
      <select
        v-model="gender"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div class="space-y-2">
      <label class="block font-medium">Weight (kg):</label>
      <input
        v-model.number="weight"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
      />
    </div>

    <div class="space-y-2">
      <label class="block font-medium">Height (cm):</label>
      <input
        v-model.number="height"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
      />
    </div>

    <div class="space-y-2">
      <label class="block font-medium">Age:</label>
      <input
        v-model.number="age"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
      />
    </div>

    <button
      @click="calculateBMR"
      class="bg-blue-600 text-white px-4 py-2 rounded-xl w-full hover:bg-blue-700 transition"
    >
      Calculate
    </button>

    <div v-if="bmr !== null" class="text-center mt-4">
      <p class="text-lg font-semibold">Your BMR: {{ bmr }} calories/day</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const gender = ref('male')
const weight = ref(0)
const height = ref(0)
const age = ref(0)
const bmr = ref(null)

const calculateBMR = () => {
  if (gender.value === 'male') {
    bmr.value = Math.round(
      10 * weight.value + 6.25 * height.value - 5 * age.value + 5
    )
  } else {
    bmr.value = Math.round(
      10 * weight.value + 6.25 * height.value - 5 * age.value - 161
    )
  }
}
</script>
