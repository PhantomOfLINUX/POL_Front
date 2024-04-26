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
        "red-900": "#7E0000",
        "red-800": "#A90000",
        "red-300": "#FF6161",
        "red-50": "#FFE0E0",
        "SelectBorder-color": "#90929E",
        "problemStageLi-color": "#D1D5DB",
        "disabled-color": "#D9D9D9",
        "OpaqueBackground-color": "rgba(0, 0, 0, 0.3)",
      },
      minHeight: {
        "min-height": "25rem",
      },
      height: {
        "social-height": "6.125rem",
        "problemStage-height": "50rem",
      },
      width: {
        "problemStage-width": "5.75rem",
        "problemStage-isCompleted": "5.5rem",
        "problemStage-title": "11.75rem",
        "problemStage-info": "21.25rem",
      },
      borderRadius: {
        "problemStage-selected-radius": "2px",
      },
      borderWidth: {
        "problemStageLi-borderWidth": "1px",
      },
    },
  },
  plugins: [],
};
