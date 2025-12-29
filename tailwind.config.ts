import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f4d400',
          hover: '#dcb300',
        },
      },
    },
  },
  plugins: [],
};
export default config;