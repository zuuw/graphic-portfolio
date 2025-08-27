
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelGreen: "#A8E6CF",
        pastelLilac: "#D7BDE2",
        pastelPeach: "#FAD7A0"
      }
    }
  },
  plugins: [],
}
