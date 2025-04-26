<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-center">TDEE Calculator</h2>

    <!-- BMR Calculator Fields -->
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

    <div class="space-y-2">
      <label class="block font-medium">Activity Level:</label>
      <select
        v-model="activityLevel"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
      >
        <option value="1.2">Sedentary (little to no exercise)</option>
        <option value="1.375">
          Lightly Active (light exercise/sports 1-3 days/week)
        </option>
        <option value="1.55">
          Moderately Active (moderate exercise/sports 3-5 days/week)
        </option>
        <option value="1.725">
          Very Active (hard exercise/sports 6-7 days a week)
        </option>
        <option value="1.9">
          Super Active (very hard exercise/sports & physical job)
        </option>
      </select>
    </div>

    <button
      class="bg-red-600 text-white px-4 py-2 rounded-xl w-full hover:bg-red-700 transition"
      @click="calculateTDEE"
    >
      Calculate
    </button>

    <!-- Display Results -->
    <div v-if="tdee" class="text-center space-y-1">
      <p class="text-lg font-semibold">
        Your TDEE: {{ tdee.toFixed(2) }} calories/day
      </p>
      <p class="text-sm text-gray-600">{{ activityDescription }}</p>
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
const activityLevel = ref(1.2) // Default sedentary activity level

// Calculated TDEE value
const tdee = ref(null)

// BMR Calculation Function
const calculateBMR = () => {
  if (gender.value === 'male') {
    return 10 * weight.value + 6.25 * height.value - 5 * age.value + 5
  } else {
    return 10 * weight.value + 6.25 * height.value - 5 * age.value - 161
  }
}

// TDEE Calculation based on activity level
const calculateTDEE = () => {
  if (weight.value > 0 && height.value > 0 && age.value > 0) {
    const bmr = calculateBMR()
    tdee.value = bmr * activityLevel.value
  }
}

// Activity level description based on selection
const activityDescription = computed(() => {
  switch (activityLevel.value) {
    case 1.2:
      return 'Little to no exercise'
    case 1.375:
      return 'Light exercise/sports 1-3 days/week'
    case 1.55:
      return 'Moderate exercise/sports 3-5 days/week'
    case 1.725:
      return 'Hard exercise/sports 6-7 days a week'
    case 1.9:
      return 'Very hard exercise/sports & physical job'
    default:
      return ''
  }
})
</script>

<style scoped>
/* Custom styles */
</style>
