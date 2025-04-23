<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6">
        Fitness Tools Dashboard
      </h1>

      <!-- Tabs -->
      <div class="flex justify-center mb-6 space-x-2">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="currentTab = index"
          :class="[
            'px-4 py-2 rounded-xl',
            currentTab === index
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-300',
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Content -->
      <div class="bg-white rounded-2xl shadow-md p-6">
        <component :is="tabs[currentTab].component" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import BmiCalculator from '~/components/BmiCalculator.vue'
import BmrCalculator from '@/components/BmrCalculator.vue'
import TdeeCalculator from '@/components/TdeeCalculator.vue'
import BodyFatCalculator from '@/components/BodyFatCalculator.vue'
import GoalSuggestion from '@/components/GoalSuggestion.vue'

const currentTab = ref(0)
const tabs = [
  { label: 'BMI', component: BmiCalculator },
  { label: 'BMR', component: BmrCalculator },
  { label: 'TDEE', component: TdeeCalculator },
  { label: 'Body Fat', component: BodyFatCalculator },
  { label: 'Goal Suggestion', component: GoalSuggestion },
]
</script>

<style scoped>
body {
  background-color: #f3f4f6; /* Equivalent to bg-gray-100 */
}
</style>
