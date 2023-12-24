/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   dark: "#080A0E",
      //   discord: "#3E6299",
      // },
      // dropShadow: {
      //   text: "0 0 5px rgba(0, 0, 0, 0.3)",
      // },
    },
  },
  plugins: [],
};