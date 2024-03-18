/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "thema-color": "#2D347F",
        "inputBorder-color": "#90929E",
        "vaild-color": "#E7322D",
        "description-color": "#21214C",
        "socialBorder-color": "#4E5968",
        gray: "#90929E",
        red: "#D1180B",
        "SelectBorder-color": "#90929E",
      },
      minHeight: {
        "min-height": "400px",
      },
      height: {
        "social-height": "98px",
      },
    },
  },
  plugins: [],
};
