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
      colors: {
        foreground: "rgb(var(--foreground-color))",
      },
      borderColor: {
        default: "rgb(var(--border-color))",
      },
    },
  },
  plugins: [],
};
