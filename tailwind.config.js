/** @type {import('tailwindcss').Config} */

import tailwindcssAnimated from 'tailwindcss-animated';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
            monserrat: ['Montserrat', 'sans-serif'],
            oswald: ['Oswald', 'sans-serif'],
        },
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}

