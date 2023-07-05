
const withMT = require("@material-tailwind/react/utils/withMT");


export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


module.exports = withMT({
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [ require('flowbite/plugin')],
});