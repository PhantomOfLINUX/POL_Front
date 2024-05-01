/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
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
                    500: "#246beb",
                    600: "#1d56bc",
                    700: "#16408d",
                },
                gray: {
                    0: "#ffffff",
                    50: "#f8f8f8",
                    100: "#f0f0f0",
                    200: "#e4e4e4",
                    300: "#dbdbdb",
                    400: "#c6c6c6",
                    500: "#8e8e8e",
                    600: "#717171",
                    700: "#555555",
                    800: "#2d2d2d",
                    900: "#1d1d1d",
                    1000: "#000000",
                },
                danger: {
                    50: "#FEECF0",
                    100: "#FCD4DE",
                    500: "#EB003B",
                    600: "#D50136",
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
                "deleteAlert-color": "EB003B",
            },
            minHeight: {
                "min-height": "25rem",
            },
            height: {
                "social-height": "6.125rem",
                "problemStage-height": "50rem",
                "100": "100dvh",
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
=======
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
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
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
          50: "#FEECF0",
          100: "#FCD4DE",
          500: "#EB003B", // base
          600: "#D50136", //text
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
      minHeight: {
        "min-height": "25rem",
      },
      minWidth: {
        "XtermQuestion-width": "450px",
      },
      height: {
        "social-height": "6.125rem",
        "problemStage-height": "50rem",
        "XtermQuestion-height": "765px",
      },
      width: {
        "problemStage-width": "5.75rem",
        "problemStage-isCompleted": "5.5rem",
        "problemStage-title": "11.75rem",
        "problemStage-info": "21.25rem",
        "Xterm-width": "930px",
      },
      borderRadius: {
        "problemStage-selected-radius": "4px",
        "XtermQuestion-Radius": "10px",
      },
      borderWidth: {
        "problemStageLi-borderWidth": "1px",
      },
    },
  },
  plugins: [],
};
