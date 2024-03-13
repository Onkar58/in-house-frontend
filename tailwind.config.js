/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#EE201C",
        danger: "#FF4842",
        lightBg: "#F2F8FF",
        background: "#FBFDFF",
        darkBg: "#C8E2FF",
      }
    },
  },
  plugins: [],
}

