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
        "custom-border": "rgb(var(--foreground-rgb))",
        "custom-card-border": "rgb(var(--card-border))",
      },
    },
  },
  plugins: [],
};
