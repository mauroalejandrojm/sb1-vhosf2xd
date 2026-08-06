/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#00d4b4',
          500: '#00bfa0',
          600: '#00a88c',
        },
        dark: {
          900: '#07070c',
          800: '#0d0d14',
          700: '#12121a',
          600: '#18181f',
          500: '#1e1e28',
          400: '#26262f',
          300: '#303038',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
