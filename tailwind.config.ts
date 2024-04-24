import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#2DCAB1",
        blue: "#4A94CC",
        blue2: "#49657E",
        gray: "#343847",
        gray2: "#535659",
        black: "#101322",
        purple: "#4D3060",
      },
    },
  },
  plugins: [],
};

export default config;
