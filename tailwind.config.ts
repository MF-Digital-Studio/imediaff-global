import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#2563EB",
        "secondary": "#16A34A",
        "brand-magenta": "#2563EB",
        "brand-red": "#FA1702",
        "brand-orange": "#2563EB",
        "brand-yellow": "#2563EB",
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(135deg, #2563EB, #16A34A)",
        "accent-gradient": "linear-gradient(135deg, #2563EB 0%, #16A34A 100%)",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
}

export default config
