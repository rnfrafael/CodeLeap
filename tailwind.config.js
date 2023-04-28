/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotoF: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        blueCode: "#7695EC",
      },
      width: {
        500: "500px",
        800: "800px",
      },
      height: {
        205: "205px",
      },
      borderWidth: {
        1: "1px",
      },
    },
    plugins: [],
  },
};
