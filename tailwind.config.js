/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      secondaryBlack: "#1D1D1F",
      orange: "#FF5A00",
      blue: "#0071E3",
      gray: "#86868B",
      lightGray: "#F5F5F7",
      extraLightGray: "#FBFBFD",
    },
  },
  plugins: [],
};
