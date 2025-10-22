/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 30s linear infinite",
        ["team-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        screens: {
          sm: { min: "340px" },
          md: { min: "430px" },
          lg: { min: "768px" },
          xl: { min: "1024px" },
          "2xl": { min: "1280px" },
          "3xl": { min: "1400px" },
          "4xl": { min: "1730px" },
          "5xl": { min: "1920px" },
        },
      },
    },
  },
  plugins: [],
};
