const withMT = require("@material-tailwind/react/utils/withMT");
const { light } = require("@mui/material/styles/createPalette");
module.exports = withMT( {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        main: "#FFF7D4",
        secondary: "#FFEAA6",
        button: "#FFD95A",
        black: "#000000",
        grey: "#ABABAB",
        green: "#008F17",
        hover: "#C07F00",
        orange:"#FFA259",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto:["Roboto","sans-serif"]
      },
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
  plugins: [],
});
