import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 80px rgba(15, 23, 42, 0.08)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.16), 0 20px 60px rgba(37, 99, 235, 0.08)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
        hero: "radial-gradient(circle at top left, rgba(37, 99, 235, 0.12), transparent 35%), radial-gradient(circle at right center, rgba(15, 23, 42, 0.08), transparent 30%)"
      },
      animation: {
        slowSpin: "spin 24s linear infinite",
        slowPulse: "pulse 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
