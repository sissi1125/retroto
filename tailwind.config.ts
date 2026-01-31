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
        retro: {
          orange: "#fbcf52",
          yellow: "#f7c59f",
          blue: "#004e89",
          cream: "#efead8",
          dark: "#2b2d42",
        }
      },
    },
  },
  plugins: [],
};
export default config;
