/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        nav: "5px 5px rgb(0,0,0), 5px 3px rgb(0,0,0), 3px 5px rgb(0,0,0)",
        btnHome:
          "4px 4px rgb(34 197 94),5px 5px rgb(0,0,0), 5px 3px rgb(0,0,0), 3px 5px rgb(0,0,0)",
        btnMenu:
          "4px 4px rgb(234 179 8), 5px 5px rgb(0,0,0), 5px 3px rgb(0,0,0), 3px 5px rgb(0,0,0)",
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
