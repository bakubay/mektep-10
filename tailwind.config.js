module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      'min': '10rem',
      '4': '10rem',
      'content': '34rem',
      'content-lg': '54rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
