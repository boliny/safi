<template>
  <section
    class="bg-gradient-to-r from-gray-900 to-gray-500 py-16 px-4 text-center"
  >
    <h2
      class="text-3xl md:text-4xl font-bold text-center text-white uppercase mb-10"
    >
      العروض والباقات
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Gold Offer -->
      <div
        class="relative bg-gradient-to-br from-[#ffd900] to-[#ad750c] shadow-2xl p-6 flex flex-col rounded-2xl transform transition duration-300 hover:scale-105"
      >
        <h3
          class="text-2xl font-bold text-center uppercase mb-4 text-white drop-shadow"
        >
          Gold
        </h3>
        <p class="text-center mb-4 text-lg text-white">
          متابعة يومية على واتساب
        </p>

        <table
          class="w-full text-lg bg-white text-black overflow-hidden rounded-md"
        >
          <thead class="bg-yellow-300 text-black">
            <tr>
              <th class="py-2 px-4">المدة</th>
              <th class="py-2 px-4">السعر</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">12 أسبوع</td>
              <td class="py-2 px-4">3000 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">16 أسبوع</td>
              <td class="py-2 px-4">4000 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">20 أسبوع</td>
              <td class="py-2 px-4">5000 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">24 أسبوع</td>
              <td class="py-2 px-4">6000 جنيه</td>
            </tr>
            <tr>
              <td class="py-2 px-4">48 أسبوع</td>
              <td class="py-2 px-4">10000 جنيه</td>
            </tr>
          </tbody>
        </table>

        <button
          class="mt-6 bg-white text-yellow-700 font-bold py-2 px-4 rounded hover:bg-yellow-100 transition duration-200"
        >
          اشترك الآن
        </button>
      </div>

      <!-- Silver Offer -->
      <div
        class="relative bg-gradient-to-br from-[#dcdcdc] to-[#a9a9a9] shadow-2xl text-black p-6 flex flex-col rounded-2xl transform transition duration-300 hover:scale-105"
      >
        <h3
          class="text-2xl font-bold text-center uppercase mb-4 text-white drop-shadow"
        >
          Silver
        </h3>
        <p class="text-center mb-4 text-md text-white">
          متابعة يوم الاثنين والجمعة فقط على واتساب
        </p>

        <table
          class="w-full text-lg bg-white text-black overflow-hidden rounded-md"
        >
          <thead class="bg-gray-400 text-black">
            <tr>
              <th class="py-2 px-4">المدة</th>
              <th class="py-2 px-4">السعر</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">12 أسبوع</td>
              <td class="py-2 px-4">2800 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">16 أسبوع</td>
              <td class="py-2 px-4">3600 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">20 أسبوع</td>
              <td class="py-2 px-4">4800 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">24 أسبوع</td>
              <td class="py-2 px-4">5600 جنيه</td>
            </tr>
            <tr>
              <td class="py-2 px-4">48 أسبوع</td>
              <td class="py-2 px-4">9000 جنيه</td>
            </tr>
          </tbody>
        </table>

        <button
          class="mt-6 bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-200"
        >
          اشترك الآن
        </button>
      </div>

      <!-- Bronze Offer -->
      <div
        class="relative bg-gradient-to-br from-[#cd7f32] to-[#8b5a2b] shadow-2xl text-white p-6 flex flex-col rounded-2xl transform transition duration-300 hover:scale-105"
      >
        <h3
          class="text-2xl font-bold text-center uppercase mb-4 text-white drop-shadow"
        >
          Bronze
        </h3>
        <p class="text-center mb-4 text-lg text-white">
          برنامج كامل بكل التفاصيل بدون متابعة
        </p>

        <table
          class="w-full text-lg bg-white text-black overflow-hidden rounded-md"
        >
          <thead class="bg-red-300 text-black">
            <tr>
              <th class="py-2 px-4">المدة</th>
              <th class="py-2 px-4">السعر</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">12 أسبوع</td>
              <td class="py-2 px-4">2000 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">16 أسبوع</td>
              <td class="py-2 px-4">2500 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">20 أسبوع</td>
              <td class="py-2 px-4">3000 جنيه</td>
            </tr>
            <tr class="border-b border-gray-300">
              <td class="py-2 px-4">24 أسبوع</td>
              <td class="py-2 px-4">3500 جنيه</td>
            </tr>
            <tr>
              <td class="py-2 px-4">48 أسبوع</td>
              <td class="py-2 px-4">4000 جنيه</td>
            </tr>
          </tbody>
        </table>

        <button
          class="mt-6 bg-white text-red-700 font-bold py-2 px-4 rounded hover:bg-red-100 transition duration-200"
        >
          اشترك الآن
        </button>
      </div>
    </div>
  </section>
</template>
