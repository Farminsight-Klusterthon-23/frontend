/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-short": "bounce 80ms linear 5",
      },
      backgroundImage: {
        "home-gradient":
          "linear-gradient(162deg, rgba(3,91,52,1) 0%, rgba(1,133,74,1) 34%, rgba(41,94,61,1) 63%, rgba(241,109,107,0.7875744047619048) 80%, rgba(3,91,52,1) 100%)",
        "auth-gradient":
          "linear-gradient(180deg, rgba(4,91,53,1) 4%, rgba(20,92,57,1) 7%, rgba(31,93,59,1) 23%, rgba(255,110,110,0.6657256652661064) 50%, rgba(67,96,67,1) 75%, rgba(4,91,53,1) 98%)",
      },
      boxShadow: {
        "dashboard-sidenav": "0px 17px 40px 4px rgba(112, 144, 176, 0.11)",
        "dropdown-menu": "0px 4px 25px 0px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        primary: {
          main: "#034732",
          medium: "#1B2559",
          light: "#4C4C4C",
          dark: "#151716",
          "contrast-text": "#F7F7F7",
        },
        secondary: {
          dark: "#718096",
          light: "#635B5B",
          medium: "#3C3C3C",
          "contrast-text": "#F2F7FF",
        },
        accent: {
          primary: "#FF6E6E",
        },
      },
    },
  },
  plugins: [],
}
