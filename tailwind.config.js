/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
                pink: "#fc00ff",
                lightblue: "#00dbde",
              },
              fontFamily: {
                lato: ["Lato", "sans-serif"],
              },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}