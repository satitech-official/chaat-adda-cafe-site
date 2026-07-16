module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#3A2118",
        terracotta: "#C65D3B",
        cream: "#FFF4E6",
        saffron: "#F3A712",
        olive: "#657153",
        peach: "#F6C7A5",
        charcoal: "#201A17"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(198, 93, 59, .22)"
      }
    }
  },
  plugins: []
};
