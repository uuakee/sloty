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
        'revolver': {
          '50': '#f2ecff',
          '100': '#e9ddff',
          '200': '#d8c1ff',
          '300': '#c59cff',
          '400': '#ba75ff',
          '500': '#b755ff',
          '600': '#b236f5',
          '700': '#9f29d9',
          '800': '#7f24af',
          '900': '#1b0a24',
          '950': '#26162e',
        },  
      },
    },
  },
  plugins: [],
};
export default config;
