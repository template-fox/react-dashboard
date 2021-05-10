const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.jsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
          background: colors.blueGray[50],
          dark      : colors.blueGray[800],
          focused   : colors.blueGray[700],
          light     : colors.blueGray[600],
          primary   : colors.blueGray[200],
          superlight: colors.blueGray[500],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
