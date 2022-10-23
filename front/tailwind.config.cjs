/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      wgreen: "#5BBFBA",
      ppurple: "#5F6CAF",
      lyellow: "#565584",
      lorange: "#F0CF85",
      lgreen: "#A4D4AE",
      sidebar: "#E6E6E6",
      textside: "#606CB0",
      fundo: "#edf0f9",
      white: "#FFFFFF",
      black: "#000000",
      lred: "#f67474",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
