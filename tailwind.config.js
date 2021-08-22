module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Canterell, Helvetica Neue",
    },
    extend: {
      lineHeight: {
        0: "0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
