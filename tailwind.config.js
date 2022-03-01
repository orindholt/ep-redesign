module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.625rem",
        sm: "0.688rem",
        tiny: "0.75rem",
        base: "0.875rem",
      },
      colors: {
        black: "#1a2433",
        lightBlue: "#eaeff7",
        red: "#f82858",
        purple: "#fae4fe",
        cyan: "#a8ebe9",
        white: "#f9f9f9",
        orange: "#FFA626",
        gray: "#eeeeee",
      },
      spacing: {
        18: "4.5rem",
      },
      boxShadow: {
        "t-md": "-1px -1px 11px 1px rgb(0 0 0 / 22%)",
      },
    },
  },
  plugins: [],
};
