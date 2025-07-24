/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      smd: "100px",
    },

    container: {
      center: true,
    },
  },
  plugins: [
    // تعریف کلاس‌های سفارشی
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: "8px 8px 12px 8px",
          borderRadius: "10px",
          fontWeight: "100",
          cursor: "pointer",
          transition: "all 300ms linear",
        },
        ".btn-danger": {
          backgroundColor: "#e11d48",
          color: "white",
        },
        ".btn-primary": {
          backgroundColor: "#0284c7",
          color: "white",
        },
        ".btn-danger:hover": {
          backgroundColor: "#9f1239",
        },
        ".btn-primary:hover": {
          backgroundColor: "#4338ca",
        },
      });
    },
  ],
};
