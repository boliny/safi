<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-center">
      Goal Suggestion (Calories)
    </h2>

    <!-- Inputs for weight, height, age, and activity level -->
    <div class="space-y-2">
      <label class="block font-medium">Weight (kg):</label>
      <input
        v-model.number="weight"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
        placeholder="Enter your weight"
      >
    </div>

    <div class="space-y-2">
      <label class="block font-medium">Height (cm):</label>
      <input
        v-model.number="height"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
        placeholder="Enter your height"
      >
    </div>

    <div class="space-y-2">
      <label class="block font-medium">Age:</label>
      <input
        v-model.number="age"
        type="number"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
        placeholder="Enter your age"
      >
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

    <div class="space-y-2">
      <label class="block font-medium">Goal:</label>
      <select
        v-model="goal"
        class="w-full border border-gray-300 rounded-xl px-4 py-2"
      >
        <option value="lose">Lose Weight</option>
        <option value="maintain">Maintain Weight</option>
        <option value="gain">Gain Weight</option>
      </select>
    </div>

    <button
      class="bg-red-600 text-white px-4 py-2 rounded-xl w-full hover:bg-red-700 transition"
      @click="calculateGoalCalories"
    >
      Calculate
    </button>

    <!-- Display Results -->
    <div v-if="suggestedCalories" class="text-center space-y-1">
      <p class="text-lg font-semibold">
        Suggested Daily Calories: {{ suggestedCalories.toFixed(2) }} kcal
      </p>
      <p class="text-sm text-gray-600">{{ goalDescription }}</p>
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
const goal = ref('maintain')

// Suggested daily calories result
const suggestedCalories = ref(null)

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
  const bmr = calculateBMR()
  return bmr * activityLevel.value
}

// Goal Suggestion Logic
const calculateGoalCalories = () => {
  if (weight.value > 0 && height.value > 0 && age.value > 0) {
    const tdee = calculateTDEE()

    if (goal.value === 'lose') {
      suggestedCalories.value = tdee - 500 // Caloric deficit for weight loss
    } else if (goal.value === 'gain') {
      suggestedCalories.value = tdee + 500 // Caloric surplus for weight gain
    } else {
      suggestedCalories.value = tdee // Maintain weight
    }
  }
}

// Description of goal
const goalDescription = computed(() => {
  if (!suggestedCalories.value) return ''

  switch (goal.value) {
    case 'lose':
      return 'To lose weight, aim for a 500 calorie deficit.'
    case 'gain':
      return 'To gain weight, aim for a 500 calorie surplus.'
    case 'maintain':
      return 'To maintain your current weight, consume the suggested calories.'
    default:
      return ''
  }
})
</script>
