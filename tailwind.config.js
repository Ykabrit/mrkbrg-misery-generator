/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mbpink: '#ff6ce7',
        mbyellow: '#ffe82c',
      },
    },
  },
  plugins: [],
};
