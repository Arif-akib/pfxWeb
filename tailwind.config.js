/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        banercon:{
          '0%':{
              transform:'scale(0)',
              opacity: 0
          },
          '100%':{
              transform:'scale(1)',
              opacity: 1
          }
      }
      }
    },
  },
  plugins: [],
}

