/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      Brown: "#916B3D",
      Clay: '#e1d0bd',
      Cream: '#F8F5F1',
      Olive: '#929A7B',
      "soft peach" : "#E7D7C5",
      "Spring Green": "#D5E0C9"

    },
    fontFamily:{
      "title": '"fino-sans", sans-serif',
      "second": '"bc-eric-machat", sans-serif'
    },
    extend: {},
  },
  plugins: [],
}