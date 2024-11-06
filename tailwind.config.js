/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          50: "#E8E8E8",
          100: "#DBDBDB",
          200: "#C4C4C4",
          300: "#ABABAB",
          400: "#949494",
          500: "#7D7D7D",
          600: "#636363",
          700: "#4D4D4D",
          800: "#363636",
          900: "#1C1C1C",
          950: "#111111"
        },
        background: '#111',
        brand: '#ACD506',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}