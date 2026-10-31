import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        enbk: {
          deep: "#06080D",
          surface: "#0B0F17",
          card: "rgba(11, 15, 23, 0.7)",
          border: "rgba(30, 41, 59, 0.8)",
          cyan: "#06b6d4",
          cyanGlow: "#22d3ee",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-cyan': 'glowCyan 4s ease-in-out infinite alternate',
      },
      keyframes: {
        glowCyan: {
          '0%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.15)' },
          '100%': { boxShadow: '0 0 25px rgba(34, 211, 238, 0.35)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
