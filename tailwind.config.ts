import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'untile-white': '#F4F4F1',
        'untile-gray': '#E0E0D7',
        'untile-blue': '#1E5891',
      },
      borderColor: {
        'untile-gray': '#E0E0D7',
        'untile-blue': '#1E5891',
      },
      textColor: {
        'untile-gray': '#8A8A86',
        'untile-blue': '#1E5891',
      },
    },
  },
  plugins: [],
};
export default config;
