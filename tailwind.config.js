// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primaryColor: '#ee4d2d'
    },
    extend: {}
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.containerWidth': {
          margin: '0 auto',
          width: '1170px',
          maxWidth: 'calc(100% - 48px)'
        }
      })
    })
  ]
}
