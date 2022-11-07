/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      dark:'#282c34',
    },
    extend: {},
  },
  plugins: [],
}

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      dark:'#282c34',
    },
    extend: {
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-purple-500": {
          textShadow: "3px 1px 5px #a855f7"
        },
      }
      addUtilities(newUtilities);
    }
  ],
});