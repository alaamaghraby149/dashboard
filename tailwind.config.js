/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4880FF",
          light: "#4379EE",
          dark: "#12163C",
        },

        background: {
          DEFAULT: "#F5F6FA",
          dark: "#1B2431",
          sidebar: "#273142",
          input: "#323D4E",
          card: "#364359",
          hoverDark: "#46546E",
          user: "#8280FF",
          order: "#FEC53D",
          sales: "#4AD991",
          pending: "#FF9066",
          gray: "#2B3034",
          tablehead: "#F1F4F9",
          statusDelivered: "#00B69B",
          tableheadDark: "#323D4E",
          bgswiperbtn: "#E2EAF8",
          startbtn: "#FF8743",
          favIcon: "#F9F9F9",
          bgBtnDark: "#4B5668",
          selectedMessage: "#979797",
          message: "#F5F5F5",
          messageDark: "#4A566B",
        },

        text: {
          primary: "#202224",
          light: "#757575",
          secondary: "#2B3034",
          muted: "#646464",
          soft: "#565656",
          light: "#7C8798",
          lighter: "#B0BAC9",
          inverse: "#DDE6F3",
          accent: "#3C4658",
          title: "#404040",
          softLight: "#D7DEEA",
          brandLight: "#9AB7FF",
          button: "#5C6678",
          user: "#8280FF",
          percent: "#00B69B",
          order: "#FEC53D",
          sales: "#4AD991",
          percentDown: "#F93C65",
          pending: "#FF9066",
          swiperbtntext: "#626262",
          swipersubtitle: "#282D32",
          rate: "#FF9500",
          swiperbtndark: "#363636",
          starred: "#FFD56D",
          file: "#9D9D9D",
          messageDark: "#D9D9D9",
          
        },

        border: {
          DEFAULT: "#E6EBF2",
          light: "#D9E1EE",
          dark: "#3A4558",
          darkSoft: "#4A5568",
          gray: "#2B3034",
          stroke: "#CFCFCF",
          cardStrokeBtn: "#979797",
          inboxBorder: "#B9B9B9",
          work: "#FD9A56",
          friends: "#D456FD",
          search: "#D5D5D5",
          inbox: "#313D4F",
          messageBorderDark: "#C6C6C6",
          messageBorder: "#D8D8D8",
        },

        state: {
          danger: "#F93C65",
          dangerSoft: "#FFE9EE",
          dangerText: "#B4233A",
          dangerHover: "#FFF0F3",
          dangerHoverDark: "#3C3340",
          dangerLight: "#FF8DA4",
          dangerSoftDark: "#4A3440",
        },

        hover: {
          light: "#EEF4FF",
          soft: "#E4EDFF",
          dark: "#323D4E",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F4F7FD",
          muted: "#EAF1FF",
        },
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
