<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-center">BMI Calculator</h2>

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

    <button
      @click="calculateBMI"
      class="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-xl w-full hover:bg-red-700 transition"
    >
      Calculate
    </button>

    <div v-if="bmi" class="text-center space-y-1">
      <p class="text-lg font-semibold">Your BMI: {{ bmi.toFixed(2) }}</p>
      <p class="text-sm text-gray-600">{{ bmiStatus }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const weight = ref(null)
const height = ref(null)
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

<style scoped>
/* Custom styles */
</style>
