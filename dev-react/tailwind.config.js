/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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

