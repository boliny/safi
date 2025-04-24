<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-center">
      Body Fat Percentage Calculator
    </h2>

    <!-- BFC Inputs -->
    <div class="space-y-2">
      <label class="block font-medium">Weight (kg):</label>
      <input
        v-model.number="weight"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
        placeholder="Enter your weight"
      />
    </div>

    <div class="space-y-2">
      <label class="block font-medium">Height (cm):</label>
      <input
        v-model.number="height"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
        placeholder="Enter your height"
      />
    </div>

    <div class="space-y-2">
      <label class="block font-medium">Age:</label>
      <input
        v-model.number="age"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
        placeholder="Enter your age"
      />
    </div>

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

    <button
      @click="calculateBodyFat"
      class="bg-red-600 text-white px-4 py-2 rounded-xl w-full hover:bg-red-700 transition"
    >
      Calculate
    </button>

    <!-- Display Results -->
    <div v-if="bodyFatPercentage" class="text-center space-y-1">
      <p class="text-lg font-semibold">
        Your Body Fat Percentage: {{ bodyFatPercentage.toFixed(2) }}%
      </p>
      <p class="text-sm text-gray-600">{{ bodyFatStatus }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// States for user inputs
const weight = ref(0)
const height = ref(0)
const age = ref(0)
const gender = ref('male')

// Body fat percentage result
const bodyFatPercentage = ref(null)

// Body Fat Calculation Function
const calculateBodyFat = () => {
  if (weight.value > 0 && height.value > 0 && age.value > 0) {
    const heightInMeters = height.value / 100
    const bmi = weight.value / (heightInMeters * heightInMeters)

    let bodyFat = 0

    if (gender.value === 'male') {
      // Formula for males
      bodyFat = 1.2 * bmi + 0.23 * age.value - 16.2
    } else {
      // Formula for females
      bodyFat = 1.2 * bmi + 0.23 * age.value - 5.4
    }

    bodyFatPercentage.value = bodyFat
  }
}

// Body Fat Status based on percentage
const bodyFatStatus = computed(() => {
  if (!bodyFatPercentage.value) return ''

  const fat = bodyFatPercentage.value

  if (fat < 6) return 'Essential Fat (for athletes)'
  if (fat >= 6 && fat <= 13) return 'Athletes'
  if (fat >= 14 && fat <= 24) return 'Fitness (Normal)'
  if (fat >= 25 && fat <= 31) return 'Overweight'
  return 'Obese'
})
</script>
