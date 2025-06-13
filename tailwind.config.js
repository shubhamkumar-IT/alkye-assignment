// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          soehne: ['SoehneBuch', 'sans-serif'],
        },
      },
    },
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // adjust paths as needed
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

  