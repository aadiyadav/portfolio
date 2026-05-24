/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Bricolage Grotesque'",
        body: "'Onest'"
      },
      colors: {
        back: "#1D1D1D",
        text: "#a2a2a2"
      },
      boxShadow: {
        lang: '0px 0px 11px -2px rgba(255,255,255,0.51)',
        proj: '20px 20px 30px -10px rgba(0, 0, 0, 1);',
        'lang-hover': '0px 0px 20px -2px rgba(255,255,255,0.8), 0px 10px 30px -10px rgba(255,255,255,0.2)'
      },
      keyframes: {
        'card-lift': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'card-lift': 'card-lift 0.3s ease-out'
      }
    },
  },
  plugins: [],
}