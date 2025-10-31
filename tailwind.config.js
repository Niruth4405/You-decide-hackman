// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add a custom background size
      backgroundSize: {
        "300%": "300% 300%", // Makes the gradient 3x bigger
      },
      // Add the animation keyframes
      keyframes: {
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      // Add the animation utility
      animation: {
        "gradient-move": "gradient-move 15s ease infinite",
      },
    },
  },
  plugins: [],
};
