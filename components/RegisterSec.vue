<template>
  <section
    ref="sectionRef"
    class="relative flex flex-col lg:flex-row bg-gradient-to-r from-red-700 to-red-800 pt-16 pb-12 lg:px-20 text-white overflow-hidden"
  >
    <!-- Men Text -->
    <div
      class="lg:w-1/4 w-full flex items-center justify-end lg:pr-10 text-right z-10 mb-10 lg:mb-0 px-6"
    >
      <div class="text-left lg:text-right space-y-4">
        <h2 class="text-4xl font-extrabold">MEN CLASS</h2>
        <p class="text-sm text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adi sollicitudin.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed">
          Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare
          mi, et mollis tellus neque vitae elit.
        </p>
        <button
          class="shadow-2xl my-button mx-auto h-16 w-64 flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden border border-white px-6 py-2 font-semibold hover:bg-white hover:text-red-700 transition duration-300"
          @click="goToRegisterMen"
        >
          JOIN NOW
        </button>
      </div>
    </div>

    <!-- Center Images -->
    <div
      class="lg:w-1/2 w-full flex flex-col sm:flex-row items-center justify-center gap-4 px-6"
    >
      <NuxtImg
        src="/imgs/41.png"
        alt="Man"
        :class="[
          'w-full sm:w-1/2 object-contain h-64 sm:h-96 transition-all duration-1000',
        ]"
        loading="lazy"
      />
      <NuxtImg
        src="/imgs/51.png"
        alt="Woman"
        :class="[
          'w-full sm:w-1/2 object-contain h-64 sm:h-96 grayscale transition-all duration-1000 delay-200',
        ]"
        loading="lazy"
      />
    </div>

    <!-- Women Text -->
    <div
      class="lg:w-1/4 w-full flex items-center justify-start lg:pl-10 text-left z-10 px-6 mt-10 lg:mt-0"
    >
      <div class="space-y-4">
        <h2 class="text-4xl font-extrabold">WOMEN CLASS</h2>
        <p class="text-sm text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adi sollicitudin.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed">
          Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare
          mi, et mollis tellus neque vitae elit.
        </p>
        <button
          class="shadow-2xl my-button mx-auto h-16 w-64 flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden border border-white px-6 py-2 font-semibold hover:bg-white hover:text-red-700 transition duration-300"
          @click="goToRegisterWomen"
        >
          JOIN NOW
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sectionRef = ref(null)

const goToRegisterMen = () => {
  navigateTo('/register-men')
}
const goToRegisterWomen = () => {
  navigateTo('/register-women')
}
</script>

<style scoped>
.my-button::before {
  content: '';
  position: absolute;
  margin: auto;
  width: 0%;
  height: 0%;
  background: #ffffff;
  transition: 0.5s ease-out;
  border-radius: 100% 100% 100% 100%;
  opacity: 0%;
}

.my-button:hover:before {
  width: 500px;
  height: 500px;
  transition: 0.5s ease-out;
  border-radius: 0;
  animation: opacity-in 0.7s forwards ease-out;
}

.my-button:hover {
  animation: bouncerino-in 0.5s forwards alternate ease-out;
}
.my-button:hover:p {
  transform: scale(5);
  transition: 0.7s ease-out;
}

.my-button {
  animation: bouncerino-out 0.5s;
}
</style>
