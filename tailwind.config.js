/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ebf1ea",
        background: "#0e120c",
        primary: "#86a1ac",
        secondery: "#080609",
        accent: "#c7b5ad",
      },
    },
  },
  plugins: [],
};
