/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        nav: "5px 5px rgba(0, 0, 0)",
        btn: "3px 3px rgba(0,0,0)",
      },
      fontFamily: {
        kalnia: "'Kalnia', serif",
        mukta: "'Mukta', sans-serif",
      },
    },
  },
  plugins: [],
};
