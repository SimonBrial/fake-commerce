/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HeroDescription: "'Bebas Neue', cursive",
      },
      backgroundColor: {
        FunitureHelpColor: '#83a9ac'
      },
      skew: {
        SkewOffer: '10deg',
        SkewOffer2: '35deg',
      }
    },
  },
  plugins: [],
}

