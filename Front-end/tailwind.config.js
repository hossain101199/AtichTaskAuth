/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slategray: "#777E90",
        ghostwhite: "#F5F6FA",
        darkblue: "#0A2540",
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
