/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '380px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        "Poppins": 'Poppins, sans-serif',
        "Pixelify": 'Pixelify Sans, sans-serif'
      },
    },
  },
  plugins: [],
}