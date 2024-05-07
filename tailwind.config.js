

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Sans"]
      },
      textColor: {
        one: ['#b2b2b2']
      },
      backgroundColor: {
        bgdark: ['#070B11']
      }
    },
  },
  plugins: [],
}



