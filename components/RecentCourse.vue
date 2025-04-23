<template>
  <section
    class="bg-gradient-to-r from-gray-900 to-gray-700 py-16 px-4 text-center"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-white uppercase mb-10">
      Offers & Packages
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- GOLD -->
      <div
        class="relative bg-gradient-to-br from-yellow-400 to-yellow-700 text-white p-6 flex flex-col rounded-2xl shadow-2xl group overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <!-- <div
          class="absolute inset-0 w-full h-full -z-10 bg-gradient-to-br from-yellow-400 via-white to-yellow-700 animate-shine rounded-t-2xl"
        /> -->
        <!-- <div
          class="absolute inset-0 bg-white opacity-30 blur-md pointer-events-none transition duration-300 group-hover:opacity-20"
        /> -->
        <div
          class="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-white/20 via-white/5 to-transparent translate-x-[-50%] group-hover:animate-pulse opacity-20 pointer-events-none"
        />

        <h3 class="text-2xl font-bold uppercase mb-4 drop-shadow text-black">
          Gold
        </h3>
        <p class="text-center mb-9 text-lg text-black font-bold">
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
        class="relative bg-gradient-to-br from-gray-300 to-gray-500 text-white p-6 flex flex-col rounded-2xl shadow-2xl group overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <!-- <div
          class="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-gray-300 to-gray-500 animate-shine rounded-t-2xl"
        />
        <div
          class="absolute inset-0 bg-white opacity-10 blur-md pointer-events-none transition duration-300 group-hover:opacity-20"
        /> -->
        <div
          class="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-white/20 via-white/5 to-transparent translate-x-[-50%] group-hover:animate-pulse opacity-20 pointer-events-none"
        />

        <h3 class="text-2xl font-bold uppercase mb-4 drop-shadow">Silver</h3>
        <p class="text-center mb-4 text-md">
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
        class="relative bg-gradient-to-br from-[#cd7f32] to-[#8b5a2b] text-white p-6 flex flex-col rounded-2xl shadow-2xl group overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <!-- <div
          class="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-[#cd7f32] to-[#8b5a2b] animate-shine rounded-t-2xl"
        />
        <div
          class="absolute inset-0 bg-white opacity-10 blur-md pointer-events-none transition duration-300 group-hover:opacity-20"
        /> -->
        <div
          class="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-white/20 via-white/5 to-transparent translate-x-[-50%] group-hover:animate-pulse opacity-20 pointer-events-none"
        />

        <h3 class="text-2xl uppercase mb-4 drop-shadow">Bronze</h3>
        <p class="text-center mb-2 text-lg">
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
h3,
p {
  color: black;
  font-weight: bold;
}
</style>
