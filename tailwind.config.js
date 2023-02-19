/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: {
          light: "#E4E9F7",
          dark: "#0e1422",
        },
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
