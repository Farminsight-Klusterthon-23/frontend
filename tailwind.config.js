/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      boxShadow: {
        "dashboard-sidenav": "0px 17px 40px 4px rgba(112, 144, 176, 0.11)",
        "dropdown-menu": "0px 4px 25px 0px rgba(0, 0, 0, 0.10)"
      },
      colors: {
        primary: {
          main: "#034732",
          medium: "#1B2559",
          light: "#4C4C4C",
          "contrast-text": "#F7F7F7",
        },
        secondary: {
          dark: "#718096",
          light: "#635B5B",
          medium: "#3C3C3C",
          "contrast-text": "#F2F7FF"
        },
        accent:{
          primary: "#FF6E6E",
        }
      },
    },
  },
  plugins: [],
}
