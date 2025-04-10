/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        buttonCustom:{
          DEFAULT: '#4F46E5',
          hover: '#342ea3',
        },
        expressoftColor:{
          DEFAULT: '#FD6436'
        }
      }
    }
  },
  plugins: []
}
