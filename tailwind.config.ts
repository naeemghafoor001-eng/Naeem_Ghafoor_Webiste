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
        navy: {
          DEFAULT: "#102033",
          50: "#f2f5f9",
          100: "#e2e8f1",
          800: "#182c44",
          900: "#102033",
        },
        forest: {
          DEFAULT: "#146B4A",
          hover: "#0f5439",
          light: "#1c825b",
        },
        emerald: {
          accent: "#18A66A",
        },
        softgreen: {
          DEFAULT: "#EAF6F0",
          border: "#c3e6d5",
        },
        offwhite: "#FAFBFC",
        lightgrey: "#F3F6F8",
        bordergrey: "#DDE4E9",
        bodytext: "#465467",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(16, 32, 51, 0.08)",
        card: "0 4px 20px -2px rgba(16, 32, 51, 0.05)",
        cardHover: "0 12px 35px -5px rgba(20, 107, 74, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
