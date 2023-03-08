/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-gray": "#adb5b9",
        "summer-red": "#bf0f0f",
        "fall-blue": "#173841",
        "spring-wine": "#8D1F20",
        "winter-torq": "#38A6A7",
        "burger-text": "#4c5f66",
      },
      boxShadow: {
        "default": "3px 3px 6px #00000029",
        "menu": "0px 3px 10px #00000029",
      },
    },
  },
  plugins: [],
};
