/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./layers/**/*.{js,vue,ts}",
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif", "system-ui"],
        Catamaran: ["Catamaran", "sans-serif", "system-ui"],
        Poppins: ["Poppins", "sans-serif", "system-ui"],
        NotoSans: ["Noto Sans", "sans-serif", "system-ui"],
        DmSans: ["DM Sans", "sans-serif", "system-ui"],
        Inter: ["Inter", "sans-serif", "system-ui"],
        HelveticaNowText: ["Helvetica Now Text", "sans-serif", "system-ui"],
      },
      colors: {
        baseWhite: "hsla(var(--clr-white), <alpha-value>)",

        gray: {
          50: "hsla(var(--clr-gray-50), <alpha-value>)",
          100: "hsla(var(--clr-gray-100), <alpha-value>)",
          200: "hsla(var(--clr-gray-200), <alpha-value>)",
          300: "hsla(var(--clr-gray-300), <alpha-value>)",
          400: "hsla(var(--clr-gray-400), <alpha-value>)",
          500: "hsla(var(--clr-gray-500), <alpha-value>)",
          600: "hsla(var(--clr-gray-600), <alpha-value>)",
        },

        gray2: "hsla(var(--clr-gray2), <alpha-value>)",
        gray3: "hsla(var(--clr-gray3), <alpha-value>)",
        gray4: "hsla(var(--clr-gray4), <alpha-value>)",
        gray5: "hsla(var(--gray-br), <alpha-value>)",
        grayDark: "hsla(var(--clr-gray-dark), <alpha-value>)",
        grayPlaceholder: "hsla(var(--clr-grayPlaceholder), <alpha-value>)",
        grayWhiteLight: "hsla(var(--clr-grayWhiteLight), <alpha-value>)",

        primary: {
          300: "hsla(var(--clr-primary-300), <alpha-value>)",
          400: "hsla(var(--clr-primary-400), <alpha-value>)",
          500: "hsla(var(--clr-primary-500), <alpha-value>)",
        },

        secondary: {
          200: "hsla(var(--clr-secondary-200), <alpha-value>)",
          300: "hsla(var(--clr-secondary-300), <alpha-value>)",
          400: "hsla(var(--clr-secondary-400), <alpha-value>)",
          500: "hsla(var(--clr-secondary-500), <alpha-value>)",
          600: "hsla(var(--clr-secondary-600), <alpha-value>)",
        },

        mainRed: {
          300: "hsla(var(--clr-mainRed), <alpha-value>)",
        },

        blueSelect: {
          300: "hsla(var(--primary-400), <alpha-value>)",
        },

        baseGreen: {
          300: "hsla(var(--clr-baseGreen-200), <alpha-value>)",
        },

        green: {
          500: "hsla(var(--clr-green-500), <alpha-value>)",
        },

        blue: {
          300: "hsla(var(--clr-blue-300), <alpha-value>)",
          400: "hsla(var(--clr-blue-400), <alpha-value>)",
          600: "hsla(var(--clr-blue-600), <alpha-value>)",
        },

        orange: "hsla(var(--clr-orange), <alpha-value>)",
        baleOrange: "hsla(var(--clr-baleOrange), <alpha-value>)",

        error: "hsla(var(--clr-error), <alpha-value>)",
        borderColor: "hsla(var(--clr-border), <alpha-value>)",

        gold: {
          300: "hsla(var(--clr-gold-300), <alpha-value>)",
          400: "hsla(var(--clr-gold-400), <alpha-value>)",
        },
      },

      boxShadow: {
        custom: "0px 2px 10px hsla(0, 0%, 0%, 0.12), 0px 2px 5px hsla(0, 0%, 0%, 0.16)",
        "2xl": "-8px 12px 18px 0px hsla(223, 23%, 88%, 1)",
        "custom-inset": "inset 0px 2px 10px hsla(0, 0%, 0%, 0.20), inset 0px 2px 5px hsla(0, 0%, 0%, 0.20)",
        emptyUploader: "0px 4px 30px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents }) {
      addBase({
        html: {},
        body: {},
      });

      addComponents({
        ".sidebar-shadow": {
          boxShadow: "5px 4px 4px 0px hsla(0, 0%, 0%, 0.25), 0px 4px 4px 0px hsla(0, 0%, 0%, 0.25)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
        },
        ".center": {
          "@apply flex items-center justify-center": {},
        },
        ".between": {
          "@apply flex justify-between items-center": {},
        },
        ".col": {
          "@apply flex flex-col": {},
        },
        ".inset-z": {
          "@apply z-50 absolute inset-0 w-full h-full": {},
        },
        ".nav-height": {
          height: "var(--nav-height)",
        },
        ".card": {
          "@apply bg-baseWhite rounded-[10px] shadow-2xl": {},
        },
        ".error": {
          "@apply text-red-500 border-gray-300 absolute -bottom-5 start-2 text-sm leading-3 z-10": {},
        },
        ".insideLabel": {
          "@apply absolute -top-1 left-3 bg-baseWhite h-3 px-2 lg:px-4 z-30 text-base w-fit": {},
        },
        ".formPadding": {
          "@apply px-6 md:px-2 2xl:px-12": {},
        },
        ".pageContainer": {
          "@apply py-7 px-6 bg-baseWhite rounded-[10px]": {},
          boxShadow: "-8px 12px 18px 0px #DADEE8",
        },
      });
    },
  ],
};
