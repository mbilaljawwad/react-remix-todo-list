/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ['"Source Sans Pro"'],
    },
    fontWeight: {
      light: 200,
      normal: 400,
      bold: 600,
      "extra-bold": 900,
    },
  },
  plugins: [],
};
