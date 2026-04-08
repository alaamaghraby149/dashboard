/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     DEFAULT: "#4880FF",
      //     light: "#4379EE",
      //     dark: "#12163C",
      //   },
      //   text: {
      //     primary: "#202224",
      //     secondary: "#2B3034",
      //     muted: "#606060",
      //   },
      //   gray: {
      //     100: "#EAEAEA",
      //     200: "#E0E0E0",
      //     300: "#D8D8D8",
      //   },
      //   success: "#00B69B",
      // },
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
          gray: "#2B3034"
        },

        text: {
          primary: "#202224",
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
        },

        border: {
          DEFAULT: "#E6EBF2",
          light: "#D9E1EE",
          dark: "#3A4558",
          darkSoft: "#4A5568",
          gray: "#2B3034"
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
