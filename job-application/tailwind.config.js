/* @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],


}
module.exports = withMT({
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ], 
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
});