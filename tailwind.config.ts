import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "-63.78px 63.78px 79.73px 0 rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config
