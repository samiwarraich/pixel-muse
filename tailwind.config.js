/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ["var(--font-fira-code)"],
      },
      borderColor: {
        "custom-border": "rgb(var(--foreground-rgb))",
        "custom-card-border": "rgb(var(--card-border))",
      },
    },
  },
  plugins: [],
};
