/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1677BD',
        darkGray: '#1E1E1E'
      },
      fontSize: {
        '3xl': '32px',
      }
    },
  },
  plugins: [],
}