const tailwindcss = require("tailwindcss");
const { mode } = require("./webpack.config");

module.exports = {
  plugins: ["postcss-preset-env", tailwindcss],
};
