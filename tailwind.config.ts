import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EE",
        olive: "#4F5A43",
        terracotta: "#A5644E",
        sand: "#E8DED1",
        ink: "#2F2A26",
        haze: "#D8CEC2",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "22px",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(47, 42, 38, 0.08)",
        card: "0 12px 24px rgba(47, 42, 38, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
