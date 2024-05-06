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
        blue: {
          300: "#7ca6f3",
          400: "#5089ef",
          500: "#246beb", // normal
          600: "#1d56bc", // hover
          700: "#16408d", // pressed
        },
        gray: {
          0: "#ffffff",
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4", // disabled
          300: "#dbdbdb", // 콘텐츠 테두리
          400: "#c6c6c6",
          500: "#8e8e8e", // 텍스트-disabled
          600: "#717171", // 입력창 기본
          700: "#555555", // body
          800: "#2d2d2d",
          900: "#1d1d1d", // title
          1000: "#000000",
        },
        danger: {
          // 900
          50: "#FDF2F3",
          100: "#FBD6D8",
          200: "#F5A3A8",
          300: "#F1747C",
          400: "#EC4651",
          500: "#EB003B", // base
          600: "#D50136", //text
          700: "#8B0E16",
          800: "#5C0A0F",
        },
        info: {
          50: "#e9f0ff",
          100: "#d4e1ff",
          500: "#2768ff",
          600: "#1f54cc",
        },
        success: {
          5: "#EEF7F0",
          10: "#CEE9D4",
          20: "#B2DCBB",
          30: "#8CCA99",
          40: "#33A14B",
          50: "#008A1E",
          70: "#005312",
          80: "#00370C",
          90: "#002207",
        },
        "thema-color": "#2D347F",
        "inputBorder-color": "#90929E",
        "vaild-color": "#E7322D",
        "description-color": "#21214C",
        "socialBorder-color": "#4E5968",
        red: "#D1180B",
        "SelectBorder-color": "#90929E",
        "problemStageLi-color": "#D1D5DB",
        "disabled-color": "#D9D9D9",
        "OpaqueBackground-color": "rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-4px)" },
        },
      },
      animation: {
        shake: "shake 150ms 4 linear",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontFamily: {
        default: ["SCoreDream", "sans-serif"],
        SCoreDream: ["SCoreDream", "sans-serif"],
      },
      minHeight: {
        "min-height": "25rem",
      },
      minWidth: {
        "XtermQuestion-width": "450px",
      },

      height: {
        "1/12": "8.33%",
        "2/12": "16.66%",
        "3/12": "25%",
        "4/12": "33.33%",
        "5/12": "41.66%",
        "6/12": "50%",
        "7/12": "58.33%",
        "8/12": "66.66%",
        "9/12": "75%",
        "10/12": "83.33%",
        "11/12": "91.66%",
        "social-height": "6.125rem",
        "problemStage-height": "50rem",
      },
      width: {
        "1/12": "8.33%",
        "2/12": "16.66%",
        "3/12": "25%",
        "4/12": "33.33%",
        "5/12": "41.66%",
        "6/12": "50%",
        "7/12": "58.33%",
        "8/12": "66.66%",
        "9/12": "75%",
        "10/12": "83.33%",
        "11/12": "91.66%",
        "problemStage-width": "5.75rem",
        "problemStage-isCompleted": "5.5rem",
        "problemStage-title": "11.75rem",
        "problemStage-info": "21.25rem",
      },
      borderRadius: {
        "problemStage-selected-radius": "4px",
      },
      borderWidth: {
        "problemStageLi-borderWidth": "1px",
        2: "2px",
        3: "3px",
      },
    },
  },
  plugins: [],
};