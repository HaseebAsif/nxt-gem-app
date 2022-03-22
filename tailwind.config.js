module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        border: "0px 0px 7px -1px #000",
      },
      screens: {
        "3xl": "1920px",
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
      },

      // that is actual animation
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
