/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        textColor: '#202224',
        whiteColor: '#FFFFFF',
        textColorLight: '#2B3034',
        blueColorLight: '#4379EE',
        greenColor: '#00B69B',
        blueColor: '#4880FF',
        ofWhiteColor: 'D8D8D8',
        ofWhiteColor2: '#EAEAEA',
        blueColorDark: '#12163C',
        grayColor: '#606060',
        ofWhiteColor3: '#E0E0E0',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
       
      },
    },
    fontFamily: {
      Nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};
