<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
  >
    <div class="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
      <h1 class="text-2xl font-bold text-center">BMI Calculator</h1>

      <div class="space-y-2">
        <label class="block">Weight (kg):</label>
        <input
          v-model.number="weight"
          type="number"
          class="input"
          placeholder="Enter your weight"
        />
      </div>

      <div class="space-y-2">
        <label class="block">Height (cm):</label>
        <input
          v-model.number="height"
          type="number"
          class="input"
          placeholder="Enter your height"
        />
      </div>

      <button
        @click="calculateBMI"
        class="bg-blue-600 text-white px-4 py-2 rounded-xl w-full hover:bg-blue-700 transition"
      >
        Calculate
      </button>

      <div v-if="bmi" class="text-center space-y-1">
        <p class="text-lg font-semibold">Your BMI: {{ bmi.toFixed(2) }}</p>
        <p class="text-sm text-gray-600">{{ bmiStatus }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const weight = ref(0)
const height = ref(0)
const bmi = ref(null)

const calculateBMI = () => {
  if (weight.value > 0 && height.value > 0) {
    const heightInMeters = height.value / 100
    bmi.value = weight.value / (heightInMeters * heightInMeters)
  }
}

const bmiStatus = computed(() => {
  if (!bmi.value) return ''
  if (bmi.value < 18.5) return 'Underweight'
  if (bmi.value < 25) return 'Normal weight'
  if (bmi.value < 30) return 'Overweight'
  return 'Obese'
})
</script>


