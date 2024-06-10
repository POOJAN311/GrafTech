/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" }
        }
      },
      animation: {
        "wiggle": "wiggle 1s linear infinite"
      }
    },
  },
  plugins: [],
}

