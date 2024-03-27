/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE201C",
        danger: "#FF4842",
        lightBg: "#F2F8FF",
        background: "#FBFDFF",
        darkBg: "#C8E2FF",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slide: "slide 0.5s ease-in-out",
      }
    }
  },
  plugins: [],
}

