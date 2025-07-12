/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#184734', // Deep green for buttons and accents
        secondary: '#F4B13D', // Gold for highlights
        dark: '#3C4043', // For dark backgrounds
        light: '#F8F9FA', // For light backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} 