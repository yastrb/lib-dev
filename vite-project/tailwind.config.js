/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        main: "#FFF7D4",
        secondary: "#FFEAA6",
        button: "#FFD95A",
        black: "#121416",
        grey: "#ABABAB",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto:["Roboto","sans-serif"]
      },
    },
    screens: {
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};
