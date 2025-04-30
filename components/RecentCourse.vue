<template>
  <section
    class="bg-gradient-to-r from-gray-900 to-gray-700 py-16 px-4 text-center"
  >
    <h2
      class="text-3xl md:text-4xl font-bold text-white uppercase mb-10"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Offers & Packages
    </h2>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <!-- GOLD -->
      <div
        class="holographic-card relative bg-black/70 text-white p-6 flex flex-col rounded-2xl shadow-2xl group overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <div
          class="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-white/20 via-white/5 to-transparent translate-x-[-50%] group-hover:animate-pulse opacity-20 pointer-events-none"
        />

        <h3
          class="text-4xl text-yellow-500 font-bold uppercase mb-4 drop-shadow"
        >
          Gold
        </h3>
        <p class="text-center mb-9 text-lg text-white font-bold">
          Daily follow-up on WhatsApp
        </p>

        <table
          class="w-full text-lg bg-white text-black overflow-hidden rounded-md"
        >
          <thead class="bg-yellow-400">
            <tr>
              <th class="py-2 px-4">Duration</th>
              <th class="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4">12 weeks</td>
              <td class="py-2 px-4">3000 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">16 weeks</td>
              <td class="py-2 px-4">4000 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">20 weeks</td>
              <td class="py-2 px-4">5000 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">24 weeks</td>
              <td class="py-2 px-4">6000 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">48 weeks</td>
              <td class="py-2 px-4">10000 EGP</td>
            </tr>
          </tbody>
        </table>

        <button
          class="mt-6 cursor-pointer w-full py-2 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
        >
          Subscribe Now
        </button>
      </div>

      <!-- SILVER -->
      <div
        class="holographic-card relative bg-black/70 text-white p-6 flex flex-col rounded-2xl shadow-2xl group overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <div
          class="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-white/20 via-white/5 to-transparent translate-x-[-50%] group-hover:animate-pulse opacity-20 pointer-events-none"
        />

        <h3 class="text-4xl font-bold uppercase text-white/80 mb-4 drop-shadow">
          Silver
        </h3>
        <p class="text-center mb-4 font-bold text-md">
          Follow-up only on Mondays & Fridays via WhatsApp
        </p>

        <table
          class="w-full text-lg bg-white text-black overflow-hidden rounded-md"
        >
          <thead class="bg-gray-400">
            <tr>
              <th class="py-2 px-4">Duration</th>
              <th class="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4">12 weeks</td>
              <td class="py-2 px-4">2800 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">16 weeks</td>
              <td class="py-2 px-4">3600 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">20 weeks</td>
              <td class="py-2 px-4">4800 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">24 weeks</td>
              <td class="py-2 px-4">5600 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">48 weeks</td>
              <td class="py-2 px-4">9000 EGP</td>
            </tr>
          </tbody>
        </table>

        <button
          class="mt-6 cursor-pointer w-full py-2 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
        >
          Subscribe Now
        </button>
      </div>

      <!-- BRONZE -->
      <div
        class="holographic-card relative bg-black/70 text-white p-6 flex flex-col rounded-2xl shadow-2xl group overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <div
          class="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-white/20 via-white/5 to-transparent translate-x-[-50%] group-hover:animate-pulse opacity-20 pointer-events-none"
        />

        <h3
          class="text-4xl font-bold uppercase text-[#cd7f32] mb-4 drop-shadow"
        >
          Bronze
        </h3>
        <p class="text-center font-bold mb-2 text-lg">
          Full detailed program without follow-up
        </p>

        <table
          class="w-full text-lg bg-white text-black overflow-hidden rounded-md"
        >
          <thead class="bg-red-300">
            <tr>
              <th class="py-2 px-4">Duration</th>
              <th class="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4">12 weeks</td>
              <td class="py-2 px-4">2000 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">16 weeks</td>
              <td class="py-2 px-4">2500 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">20 weeks</td>
              <td class="py-2 px-4">3000 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">24 weeks</td>
              <td class="py-2 px-4">3500 EGP</td>
            </tr>
            <tr>
              <td class="py-2 px-4">48 weeks</td>
              <td class="py-2 px-4">4000 EGP</td>
            </tr>
          </tbody>
        </table>

        <button
          class="mt-6 w-full cursor-pointer py-2 bg-red-600 rounded-full font-semibold hover:bg-red-900 transition"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
    })
  },
}
</script>

<style scoped>
@keyframes shine {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-shine {
  background-size: 200% auto;
  animation: shine 2.5s linear infinite;
}

/* Apply a diagonal gradient for the shine effect */
.animate-shine {
  background-size: 200% 200%;
  animation: shine 2.5s linear infinite;
}

tr {
  border-bottom: 1px solid #777;
}
.holographic-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.5s ease;
}

.holographic-card h2 {
  color: #fff;
  font-size: 2rem;
  position: relative;
  z-index: 2;
}

.holographic-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg,
    transparent,
    transparent 30%,
    rgba(255, 255, 255, 0.3)
  );
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.holographic-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.holographic-card:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
</style>
