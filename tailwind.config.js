/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fefcfb",
        background: "#130807",
        primary: "#4b391b",
        secondery: "#143438",
        accent: "#5680c2",
      },
      fontFamily: {
        title: "Archivo Black",
      },
    },
  },
  plugins: [],
};
