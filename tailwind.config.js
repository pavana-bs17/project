/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans'],
      },
      boxShadow: {
        'custom': '0 0 3px rgba(0, 0, 0, 0.29)',
      },
      boxShadow: {
        'top-bottom': '0 -4px 6px -1px rgba(0, 0, 0, 0.29), 0 4px 6px -1px rgba(0, 0, 0, 0.29)',
      },
    },
  },
  plugins: [],
}