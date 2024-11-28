/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Adding a custom font size named 'xxl' with size and line-height
        'xxl': ['1.75rem', { lineHeight: '2.25rem' }],
        // Overriding an existing size or creating a custom size
        '2xl': ['1.625rem', { lineHeight: '2.25rem' }],
        // Example of adding other sizes
        'custom-lg': ['1.25rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
};
