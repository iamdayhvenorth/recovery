/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "hero" : "url('./src/assets/banner.jpg')",
        "exp" : "url('./src/assets/bg1-value.jpg')",
      },
      fontFamily: {
        'prata': ["prata","sans-serif"],
        'inter': ["inter", 'sans-serif'],
        'raleway': ["raleway", 'sans-serif'],
        'open-sans': ["open sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

