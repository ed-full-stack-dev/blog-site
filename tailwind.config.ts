import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ctgp: {
          'bg-dark': '#1A0223',
          'bg-midnight': '#1B0031',
          'accent-pink': '#FF6F61',
          'accent-orange': '#FF895E',
          'text-white': '#FFFFFF',
          'text-gray': '#D1D1D1',
          'border-lavender': '#6A0DAD',
          'border-purple': '#9A5BDB',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
