/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slategray: "#777E90",
        ghostwhite: "#F5F6FA",
        darkblue: "#264180",
        action: "#FF4000",
        mercury: "#E6E8EC",

        yellow: "#F2B556",
        danger: "#FF114A",
        success: "#5DC80C",
        info: "#245DF1",
      },
    },
  },
  plugins: [],
};
