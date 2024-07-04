/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    extend: {
      colors: {
        primaryColor: "#055A6E",
        primaryLight: "#90B9B8",
        whiteColor: "#F4F4F4",
        blackColor: "#1d1d1d",
        secondaryColor: "#DE4B5A",
        thirdColor: "#EDC13D",
      },
      fontFamily: {
        titleFont: ["Helevetica-Neue-Bold", "sans-serif"],
        textFont: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [fluid],
};

