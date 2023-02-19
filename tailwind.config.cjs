/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      main: '#373E98',
      secondary: '#F16775',
      lightyellow: 'FEE36E',
      darkyellow: 'CEB92C',
      dark: '2A2A2A',
    },
  },
  plugins: [],
};
