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
        "format-text": "#011c27",
        "card-bg": "#fcfcfc",
        "card-footer": "#f2f2f2",
        "card-cover-bg": "#3E3E40",
        "watch-text": "#8d8d8d",
        "next-episode": "#7e7d7d",
      },
      boxShadow: {
        "default": "3px 3px 6px #00000029",
        "menu": "0px 3px 10px #00000029",
        "anime-card": "8px 8px 25px #00000029",
      },
      fontFamily: {
        "main": ['"Tajawal"'],
      },
    },
  },
  plugins: [],
};
