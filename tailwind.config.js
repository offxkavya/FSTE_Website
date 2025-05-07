/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefbf3',
          100: '#d6f5e3',
          200: '#b0eacd',
          300: '#7dd8ae',
          400: '#4abd8a',
          500: '#2aa371',
          600: '#1a825a',
          700: '#17694a',
          800: '#17533c',
          900: '#154534',
          950: '#0a271e',
        },
        secondary: {
          50: '#eef9ff',
          100: '#dbf1ff',
          200: '#b5e8ff',
          300: '#83dcff',
          400: '#48c7fc',
          500: '#1eaef8',
          600: '#098eea',
          700: '#0b73d0',
          800: '#105ea9',
          900: '#124f85',
          950: '#0f325a',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc471',
          400: '#ffa13a',
          500: '#ff8317',
          600: '#f26608',
          700: '#ca4c09',
          800: '#a13c10',
          900: '#823411',
          950: '#461905',
        },
        neutral: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9dd',
          300: '#b9b9c0',
          400: '#93949f',
          500: '#767783',
          600: '#5e5f6b',
          700: '#4c4d57',
          800: '#424249',
          900: '#393940',
          950: '#26262d',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};