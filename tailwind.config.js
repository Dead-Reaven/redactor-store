/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {},
      height: {},
      boxShadow: {},
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '5vw',
      },
      screens: {},
    },
    screens: {
      sm: '393px',
      md: '768px',
      lg: '1120px',
      xl: '1440px',
    },
  },
}
