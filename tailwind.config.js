/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "DM Serif Text",
      secondary: "Nunito",
      third: "Dancing Script",
      poppins: "Poppins",
    },
    backgroundImage: {
      hero: "url(/assets/hero/bg.jpg)",
      grid: "url(/assets/grid.png)",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#292F36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};
