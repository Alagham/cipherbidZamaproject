/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD208", // bright yellow
        background: "#000000", // black
        foreground: "#FFFFFF", // white
        muted: "#1A1A1A",
        border: "#2A2A2A",
        card: "#0D0D0D",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
