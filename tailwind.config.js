/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        nav: "5px 5px rgba(0, 0, 0)",
        btnHome: "4px 4px rgb(34 197 94),4.75px 4.75px rgb(0,0,0)",
        btnMenu: "0px 0px rgb(0,0,0)",
        btnContact: "0px 0px rgb(0,0,0)",
      },
      fontFamily: {
        kalnia: "'Kalnia', serif",
        mukta: "'Mukta', sans-serif",
        lilitaOne: "'Lilita One', sans-serif",
      },
    },
  },
  plugins: [],
};
