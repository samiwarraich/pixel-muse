/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
      },
      borderColor: {
        default: "rgb(var(--color-border))",
        light: "rgb(var(--color-text))",
      },
    },
  },
  plugins: [],
};
