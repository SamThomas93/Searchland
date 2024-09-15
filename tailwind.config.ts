import type { Config } from "tailwindcss";

const fallbackFonts = ["Arial", "sans-serif"];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      jakarta: ["var(--font-jakarta)", ...fallbackFonts],
    },
    extend: {
      colors: {
        darkSlateGrey: "#061c23",
        primaryGreen: "#0fd86d",
        white: "#FFF",
      },
    },
  },
};

export default config;
