<template>
  <div class="bg-[#0d0d0d] flex items-center justify-center px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
      <!-- Gold Plan -->
      <div
        class="relative bg-[#1a1a1a] rounded-2xl p-6 pt-10 text-white shadow-lg border border-red-500 hover:scale-105 hover:ring-4 hover:ring-red-500 hover:shadow-2xl transition-transform duration-300 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-white to-red-700 animate-shine rounded-t-2xl"
        />
        <h2 class="text-2xl font-bold text-center mb-2">GOLD PLAN</h2>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Customized workout & nutrition
            plan
          </li>
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Daily follow-up via WhatsApp
          </li>
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Monthly progress review
          </li>
        </ul>
        <table
          class="w-full text-center text-lg mt-4 bg-white text-black overflow-hidden rounded-md"
        >
          <thead class="bg-[#9c9c9c]">
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
          class="mt-6 w-full py-2 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
        >
          SUBSCRIBE NOW
        </button>
      </div>

      <!-- Silver Plan -->
      <div
        class="relative bg-[#1a1a1a] rounded-2xl p-6 pt-10 text-white shadow-lg border border-gray-400 hover:scale-105 hover:ring-4 hover:ring-gray-400 hover:shadow-2xl transition-transform duration-300 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 via-white to-gray-600 animate-shine rounded-t-2xl"
        ></div>
        <h2 class="text-2xl font-bold text-center mb-2">SILVER PLAN</h2>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Workout plan only
          </li>
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Bi-weekly check-ins
          </li>
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Monthly review
          </li>
        </ul>
        <button
          class="mt-6 w-full py-2 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
        >
          SUBSCRIBE NOW
        </button>
      </div>

      <!-- Bronze Plan -->
      <div
        class="relative bg-[#1a1a1a] rounded-2xl p-6 pt-10 text-white shadow-lg border border-orange-500 hover:scale-105 hover:ring-4 hover:ring-orange-500 hover:shadow-2xl transition-transform duration-300 overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-white to-orange-600 animate-shine rounded-t-2xl"
        ></div>
        <h2 class="text-2xl font-bold text-center mb-2">BRONZE PLAN</h2>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Pre-made program
          </li>
          <li class="flex items-center">
            <span class="text-lg mr-2 text-red-500">❌</span> No follow-up
          </li>
          <li class="flex items-center">
            <span class="text-lg mr-2">✅</span> Initial assessment only
          </li>
        </ul>
        <button
          class="mt-6 w-full py-2 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
        >
          SUBSCRIBE NOW
        </button>
      </div>
    </div>
  </div>
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

/* Hover animation for glowing effect on the card */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:ring-4:hover {
  ring-width: 4px;
}

.hover\:ring-red-500:hover {
  ring-color: #f87171;
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
</style>
