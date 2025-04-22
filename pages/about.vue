<template>
  <section class="bg-gradient-to-b from-white to-gray-100 py-20 px-4 md:px-12">
    <h2 class="text-4xl font-bold text-center mb-16 text-black">رحلة الكوتش</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in journeySteps"
        :key="index"
        class="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
      >
        <NuxtImg
          :src="item.img"
          alt="journey step image"
          class="w-full h-[600px] object-cover"
        />

        <div
          class="absolute inset-0 bg-red-600/70 text-white opacity-0 group-hover:opacity-100 transition duration-500"
        >
          <div class="flex justify-center items-center h-full text-center px-4">
            <div>
              <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>
              <p class="text-lg">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const journeySteps = [
  {
    img: '/imgs/8.jpg',
    title: 'المرحلة الأولى: الاكتشاف',
    text: 'نبدأ بتحديد أهدافك وتحديد التحديات التي قد تواجهك في طريقك للتدريب.',
  },
  {
    img: '/imgs/9.jpg',
    title: 'المرحلة الثانية: التصميم',
    text: 'نصمم لك خطة تدريبية وغذائية تتناسب مع أهدافك الشخصية واحتياجاتك الخاصة.',
  },
  {
    img: '/imgs/10.jpg',
    title: 'المرحلة الثالثة: الالتزام',
    text: 'نلتزم بالبرنامج ونراقب تقدمك خطوة بخطوة لتحقيق أفضل النتائج.',
  },
  {
    img: '/imgs/11.jpg',
    title: 'المرحلة الرابعة: التحديات',
    text: 'مواجهة التحديات والظروف التي قد تؤثر على التزامك، مع تقديم الحلول المناسبة.',
  },
  {
    img: '/imgs/12.jpg',
    title: 'المرحلة الخامسة: التحسين',
    text: 'نقوم بتقييم تقدمك، ونقوم بإجراء تعديلات على الخطة للوصول إلى أفضل النتائج.',
  },
  {
    img: '/imgs/13.jpg',
    title: 'المرحلة السادسة: النجاح',
    text: 'نحتفل بتحقيق أهدافك ونخطط للمرحلة التالية في مسيرتك التدريبية المستمرة.',
  },
]
</script>

<style scoped>
h2 {
  font-family: 'Cairo', sans-serif;
}

.group:hover .absolute {
  opacity: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
