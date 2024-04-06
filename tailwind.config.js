/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: "#FF2000CC",
        orangered: "#FD4D33"
      }
    },
  },
  plugins: [],
}

