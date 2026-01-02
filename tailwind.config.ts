import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        accent: "#ffca2e",
        brand: "#ffca2e",
        dark: "#000000",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "3rem",
        },
        screens: {
          "2xl": "1320px",
        },
      },
      boxShadow: {
        glow: "0px 20px 60px rgba(255, 202, 46, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

