/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        one: "Roboto Condensed",
        two: "Poppins",
        three: "Oswald",
        four: "Playfair Display",
        five: "Roboto",
        six: "Rubik",
        seven: "Agdasima",
        eight: "Josefin Sans",
        nine: "DM Sans"
      },
      colors: {
        back: "#1D1D1D",
        text: "#a2a2a2"
      },
      boxShadow: {
        lang: '0px 0px 11px -2px rgba(255,255,255,0.51)',
        proj: '20px 20px 30px -10px rgba(0, 0, 0, 1);'
      }
    },
  },
  plugins: [],
}