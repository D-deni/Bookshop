/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserratBold': ['MontserratBold', 'sans-serif'],
        'montserratRegular': ['MontserratRegular', 'sans-serif'],
        'montserratMedium': ['MontserratMedium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}