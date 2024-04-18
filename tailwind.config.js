// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        willowGreen: {
          50: "#f3fbf2",
          100: "#e5f6e2",
          200: "#cbecc6",
          300: "#a1dc99",
          400: "#70c365",
          500: "#4ba740",
          600: "#409935",
          700: "#2f6d28",
          800: "#295724",
          900: "#23481f",
          950: "#0e270c",
        },
        willowGreenLight: "#56cd47",
        willowBrown: {
          50: "#f5f4f0",
          100: "#e9e8de",
          200: "#d6d4c0",
          300: "#bbb89b",
          400: "#a29f79",
          500: "#7c7955",
          600: "#696747",
          700: "#525139",
          800: "#434231",
          900: "#3b3b2c",
          950: "#1e1e15",
        },
        heroContrast: `#4481BB`,
      },
    },
  },
  plugins: [],
};
