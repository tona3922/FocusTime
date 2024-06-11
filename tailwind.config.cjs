module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
    fontFamily: {
      customTitle: ['"Volkhov"', "serif"],
      customDetail: ['"Mulish"', "sans-serif"],
      customCardTitle: ['"Montserrat"', "sans-serif"],
      customHandWriting: ['"Comforter Brush"', "cursive"],
    },
  },
  parentClass: "tailwind-container",
  prefix: "",
  plugins: [],
};
