const { difficulty, iconColors } = require("./constants/colors.js");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          light: "#FB923C",
        },
        cream: "#FAFAF9",
        surface: "#FFFFFF",
        border: "#E7E5E4",
        sand: "#F5F5F4",
        stone: "#78716C",
        bark: "#57534E",
        difficulty,
      },
    },
  },
  plugins: [],
};

module.exports = config;
