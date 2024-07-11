/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "section-1-bg": "url('src/assets/images/background-image.jpg')",
      },
      width: {
        "120": "37.5rem",
        "1/10": "12%",
        "9/10": "88%",
        "48%": "48%"
      },
      height: {
        "100": "23.5rem",
        "200px": "12.5rem"
      },
      fontFamily: {
        "Agbalumo": "Agbalumo",
        "Poppins": "Poppins",
      },
      colors: {
        "hblue": "#63b0ee",
        "yellow": "#fdc500",
        "blue": "#010C80",
        "back": "#ffe7da",
        "back2": "#e4b09a",
        "transparent": "rgba(0, 0, 0, 0.25)",
        "attention": "#fefce8"
      },
      borderRadius: {
        "percent": "100%"
      },
      animation: {
        "loading": "loading 3s cubic-bezier(0.52, 0.06, 0.32, 0.99) 0s infinite normal forwards",
        "fadein": "fadeIn 0.3s",
        "fadeout": "fadeOut 0.3s",
        "opacityin": "opacityIn 0.3s",
        "opacityout": "opacityOut 0.3s",
        "translatein": "translateIn 0.3s",
        "translateout": "translateOut 0.3s"
      }
    },
  },
  plugins: [],
};
