// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#409935",
        primaryLight: "#56cd47",
      },
    },
  },
  plugins: [],
};