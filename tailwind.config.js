/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#20262E',
        'secondary': '#0D1114',
        'title': '#34B7F1',
        'paragraph' : '#5B718F',
        'button' : '#34D3A3',
      },
    },
  },
  plugins: [],
}

