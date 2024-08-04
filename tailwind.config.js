/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custom" :"url('./image_21.png')",
        "custom_1":"url('./image_22.jpg')"
      }
    },
  },
  plugins: [],
}