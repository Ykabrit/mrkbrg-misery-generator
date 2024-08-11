/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        mbpink: '#ff6ce7',
        mbyellow: '#ffe82c',
      },
    },
  },
  plugins: [import('flowbite/plugin')],
};
