/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F0F0F0",
        herogrey: "#F2F0F1", // Make sure to add a hash (#) before the color code
      },
    },
  },
  plugins: [],
};
