module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        'star-primary': '#334F70',
        'star-secondary': '#00B4E2',
        'star-danger': '#e88331',
        'star-gray': '#eee',
      },
      fontFamily: {
        outline: ['"Londrina Outline"', '"Georgia"', '"Times New Roman"', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
