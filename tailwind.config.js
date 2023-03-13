/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluefonce:"#2E3840",
        primary:"#F9DBBB",
        rouge:"#FF0303"
      }
    },
  },
  plugins: [],
}
