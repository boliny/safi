<template>
  <div
    class="hero-section flex flex-col md:flex-row text-white min-h-screen overflow-hidden"
    @mousemove="handleMouseMove"
  >
    <!-- Image Section -->
    <div
      class="image-container w-full md:w-1/2 flex items-center justify-center"
    >
      <NuxtImg
        src="/imgs/11.png"
        alt="Gym"
        class="gym-image"
        :style="{ transform: `translateX(${imageOffset}px)` }"
        loading="lazy"
      />
    </div>

    <!-- Content Section -->
    <div
      class="text-container w-full md:w-1/2 lg:w-[40%] flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-8 md:py-16"
    >
      <p class="mb-4 lg:text-3xl font-bold text-red-500">Hi, I am Mustafa.</p>
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-white leading-tight"
      >
        {{ title }}
      </h1>
      <p class="lg:text-xl md:text-lg text-orange-400 mb-6">
        {{ subtitle }}
      </p>
      <button
        class="bg-red-600 hover:bg-orange-500 font-bold cursor-pointer text-white hover:text-black py-3 px-8 rounded-xl shadow-lg transform hover:scale-110 transition duration-300"
      >
        {{ buttonText }}
      </button>

      <!-- Featured In Section -->
      <h3 class="text-center text-sm sm:text-base font-bold mt-8 text-white">
        FEATURED IN
      </h3>
      <div class="flex justify-center items-center gap-6 mt-4 flex-wrap">
        <div class="flex items-center gap-1">
          <Icon name="mdi:weight-lifter" class="text-white text-2xl" />
          <span class="text-white text-2xl font-bold">HOLP</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:food" class="text-red-400 italic text-xl" />
          <span class="text-red-400 italic text-xl">Feed&Food</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:coach-lamp" class="text-white text-2xl" />
          <span class="text-white text-2xl font-bold">
            LA <span class="text-sm text-orange-500">COACH BASE</span>
          </span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:account-tie-woman" class="text-white text-2xl" />
          <span class="text-white text-2xl font-bold">Bridgette</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:lightning-bolt" class="text-white text-2xl" />
          <span class="text-white text-2xl font-bold">amazero</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:music" class="text-red-400 italic text-xl" />
          <span class="text-red-400 italic text-xl">Vibes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'I HELPED MILLIONS OF PEOPLE TO IMPROVE THEIR LIVES',
      subtitle:
        'Are you the next? Discover the simple 3 Steps that I Discovered to Hack Productivity. It works 100%. Wanna transform your life?',
      buttonText: 'Get Your FREE GUIDE',
      imageOffset: 0,
    }
  },
  methods: {
    handleMouseMove(e) {
      const centerX = window.innerWidth / 2
      const diff = (e.clientX - centerX) / 30
      this.imageOffset = diff
    },
  },
}
</script>

<style scoped>
.hero-section {
  background-image: url('/public/bg-black.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  height: auto;
  padding: 1rem 0;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .image-container {
    height: 100vh;
    padding: 0;
  }
}

.gym-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s ease-out;
  animation: slideUp 1.5s ease-out forwards;
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.text-container {
  animation: textAppear 1.5s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

@keyframes textAppear {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
