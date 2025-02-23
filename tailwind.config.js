/** @type {import('tailwindcss').Config} */
// import { module } from 'tailwindcss'
module.exports = {
  darkMode: 'class', // Enables dark mode based on a class
  content: [
    "./index.html", // Paths to HTML files to scan for class names
    "./src/**/*.{js,ts,jsx,tsx}", // Paths to JavaScript/TypeScript files
  ],
  theme: {
    extend: {}, // Extend the default theme with custom styles
  },
  plugins: [], // Array for any additional Tailwind CSS plugins
}