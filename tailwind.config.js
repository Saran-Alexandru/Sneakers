/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#74b63b',  // adaugi culoarea personalizată
      },
      fontFamily: {
        sans: ['"Your Custom Font"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
