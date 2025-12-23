/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD208", // CipherBid Yellow
        background: "#000000",
        foreground: "#ffffff",
        muted: "#1A1A1A",
        border: "#2A2A2A",
        card: "#0D0D0D",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
