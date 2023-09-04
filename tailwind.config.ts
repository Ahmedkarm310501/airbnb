import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FF5A5F",
      },
      boxShadow: {
        bottom: "0 6px 5px -5px rgb(0 0 0 / 16%);",
      },
    },
  },
  plugins: [],
};
export default config;
