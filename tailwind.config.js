/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Aktivierung des Dark Mode per Klasse
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-custom-blue': '#90a9b9',
      },
    },
  },
  plugins: [],
};