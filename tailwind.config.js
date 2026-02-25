/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}',
  ],
  theme: {
    extend: {
      colors: {
        'rally': {
          50:  '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa3a3',
          400: '#ff6b6b',
          500: '#ff3333',
          600: '#cc0000',
          700: '#a80000',
          800: '#8a0000',
          900: '#6e0000',
          950: '#400000',
        },
      },
      fontFamily: {
        'heading': ['"Inter"', 'system-ui', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
