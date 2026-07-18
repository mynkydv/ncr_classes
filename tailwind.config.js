/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: { DEFAULT: "#0E5C42", dark: "#0A4331", light: "#E6F2EC" },
        mark:  { DEFAULT: "#FFC531", light: "#FFF3D0" },
        rust:  { DEFAULT: "#E0552F", light: "#FDE9E2" },
        sky:   { DEFAULT: "#3E7BC4", light: "#E4EEF9" },
        ink:   "#12211B",
        grey:  "#5F7268"
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ['"Public Sans"', "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "monospace"]
      }
    }
  },
  plugins: []
};
