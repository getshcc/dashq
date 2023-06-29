/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      zinc: colors.zinc,
      slate: colors.slate,
      blue: colors.blue,
      "custom-red": "#FFF4EA",
      "custom-green": "#EAFFEB",
      "custom-blue": "#EAEFFF",
      "custom-purple": "#F3EFFE"
    }
  },
  plugins: [],
}

