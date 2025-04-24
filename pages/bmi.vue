<template>
  <div class="min-h-screen bg-black text-white px-2 sm:px-4 py-6">
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-3xl sm:text-4xl font-bold text-center mb-8 text-orange-500"
      >
        Fitness Tools Dashboard
      </h1>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-6">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'px-3 py-2 cursor-pointer sm:px-4 sm:py-2 rounded-xl transition-colors duration-200 text-sm sm:text-base',
            currentTab === index
              ? 'bg-red-600 text-white'
              : 'bg-white text-black border border-gray-300 hover:bg-orange-100',
          ]"
          @click="currentTab = index"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Descriptions -->
      <p
        class="text-sm sm:text-base mb-4 text-gray-300 text-center max-w-2xl mx-auto"
      >
        {{ tabs[currentTab].description }}
      </p>

      <!-- Content -->
      <div class="bg-white text-black rounded-2xl shadow-md p-4 sm:p-6">
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
  {
    label: 'BMI',
    component: BmiCalculator,
    description:
      'مؤشر كتلة الجسم (BMI) يساعدك على معرفة ما إذا كان وزنك مناسبًا لطولك.',
  },
  {
    label: 'BMR',
    component: BmrCalculator,
    description:
      'معدل الأيض الأساسي (BMR) يُظهر كم عدد السعرات التي يحتاجها جسمك في الراحة.',
  },
  {
    label: 'TDEE',
    component: TdeeCalculator,
    description:
      'إجمالي الإنفاق اليومي للطاقة (TDEE) يعكس السعرات المطلوبة للحفاظ على وزنك حسب نشاطك اليومي.',
  },
  {
    label: 'Body Fat',
    component: BodyFatCalculator,
    description:
      'حاسبة نسبة دهون الجسم تساعدك على تقدير كمية الدهون بالنسبة لوزنك.',
  },
  {
    label: 'Goal Suggestion',
    component: GoalSuggestion,
    description:
      'اقتراح أهداف لياقية مخصصة بناءً على بياناتك الحالية للوصول لهدفك بأفضل طريقة.',
  },
]
</script>

<style scoped>
@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }

  button {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }

  .p-4 {
    padding: 1rem !important;
  }

  .text-sm {
    font-size: 0.75rem !important;
  }
}
</style>
