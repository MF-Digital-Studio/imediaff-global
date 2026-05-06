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
        "brand-magenta": "#E515AB",
        "brand-red": "#FA1702",
        "brand-orange": "#FD8514",
        "brand-yellow": "#FFBD1E",
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(to right, #E515AB, #FA1702, #FD8514, #FFBD1E)",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
}

export default config
