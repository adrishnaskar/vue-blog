/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'content': 'repeat(auto-fit,minmax(300px,1fr))'

      }
    },
  },
  plugins: [],
}
