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
        primaryColor: "#FFFFFF",
        primaryLight: "#FFFFFF",
        primaryDark: "#FFFFFF",
        secondaryColor: "#FFFFFF",
      },
      fonts: {
        titleFont: "#FFFFFF",
        textFont: "#FFFFFF",
      },
    },
  },
  plugins: [fluid],
};