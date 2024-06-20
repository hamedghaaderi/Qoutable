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
      },
      height: {
        "100": "23.5rem",
      },
      fontFamily: {
        Agbalumo: "Agbalumo",
        Poppins: "Poppins",
      },
      colors: {
        hblue: "#63b0ee",
        yellow: "#fdc500",
        blue: "#010C80",
        back: "#ffe7da",
      },
    },
  },
  plugins: [],
};
