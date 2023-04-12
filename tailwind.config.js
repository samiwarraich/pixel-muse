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
        fira: ["var(--font-firaCode)"],
      },
    },
  },
  plugins: [],
  safelist: [
    "hover:text-[#ffffff]",
    "hover:text-[#00acee]",
    "hover:text-[#000000]",
  ],
};
