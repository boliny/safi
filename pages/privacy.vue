<template>
  <section class="bg-gray-900 text-white py-16 px-6 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-red-500 mb-8 text-center">
        Privacy Policy
      </h1>

      <p class="text-gray-300 mb-6 leading-loose">
        We take your privacy seriously. On this website, we are committed to
        protecting your personal data and the information you provide while
        using our services.
      </p>

      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold text-orange-400 mb-2">
            1. Information Collection
          </h2>
          <p class="text-gray-200 leading-relaxed">
            We collect data such as your name, email address, phone number,
            height, weight, and date of birth when you sign up for programs.
            Additional information may also be collected to better personalize
            your program.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-orange-400 mb-2">
            2. Use of Information
          </h2>
          <p class="text-gray-200 leading-relaxed">
            We use the information to provide personalized services, track your
            progress, and improve the quality of training and nutrition
            programs. Your data will not be shared with any third party without
            your consent.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-orange-400 mb-2">
            3. Data Protection
          </h2>
          <p class="text-gray-200 leading-relaxed">
            We secure your data using best security practices and are committed
            to never selling or trading your personal information to any
            external party.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-orange-400 mb-2">
            4. Your Rights as a User
          </h2>
          <p class="text-gray-200 leading-relaxed">
            You have the right to request modification, correction, or deletion
            of your data at any time. We fully respect your right to control
            your information.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-orange-400 mb-2">
            5. Policy Updates
          </h2>
          <p class="text-gray-200 leading-relaxed">
            This policy may be updated from time to time. Any changes will be
            posted here, and we encourage you to review it periodically.
          </p>
        </div>
      </div>

      <div class="mt-12 text-center space-y-4">
        <p class="text-gray-400 text-sm">Last Updated: April 2025</p>

        <div class="flex justify-center gap-4 mt-6">
          <NuxtLink
            to="/"
            class="bg-red-600 hover:bg-red-700 transition-all text-white font-semibold py-2 px-4 rounded-full"
          >
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Privacy Policy | Training Website',
  meta: [
    {
      name: 'description',
      content:
        'Read our Privacy Policy to understand how we collect, use, and protect your personal information when using our fitness services.',
    },
    {
      name: 'keywords',
      content:
        'privacy policy, personal data, user data, data protection, fitness privacy, information collection',
    },
    { name: 'author', content: 'Training Website' },
    { property: 'og:title', content: 'Privacy Policy | Training Website' },
    {
      property: 'og:description',
      content:
        'This page explains how your personal data is collected and protected while using our services.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://your-website-url.com/privacy-policy',
    }, // Replace with your real URL
    { property: 'og:image', content: '/images/privacy-banner.jpg' }, // Replace with a real image path
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Privacy Policy | Training Website' },
    {
      name: 'twitter:description',
      content:
        'Understand how we protect and use your personal data on our training platform.',
    },
    { name: 'twitter:image', content: '/images/privacy-banner.jpg' }, // Replace if needed
  ],
})
</script>
