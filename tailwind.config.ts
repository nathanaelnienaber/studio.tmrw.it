import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#0E0E0E",
          2: "#141414"
        },
        accent: {
          blue: "#4AB2F7",
          amber: "#EBA94A"
        },
        success: "#3ECF8E",
        danger: "#FF6B6B"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      maxWidth: {
        content: "1120px"
      },
      spacing: {
        13: "3.25rem"
      },
      boxShadow: {
        panel: "0 0 25px rgba(74, 178, 247, 0.08)",
        panelHover: "0 0 25px rgba(74, 178, 247, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
