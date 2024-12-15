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
        padding: {
          DEFAULT: '48px',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1677BD',
        darkGray: '#1E1E1E'
      }
    },
  },
  plugins: [],
}