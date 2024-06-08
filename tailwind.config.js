/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mentra: ['mentra', 'sans-serif'],
        beckan: ['beckan', 'sans-serif'],
        'gill-sans': ['gill sans', 'sans-serif'],
        'gill-roy': ['gill roy', 'sans-serif'],
        heavitas: ['heavitas', 'sans-serif'],
        pearce: ['pearce', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
