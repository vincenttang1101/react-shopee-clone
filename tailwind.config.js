// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#ee4d2d'
      },
      backgroundImage: {
        hero: "url('./src/assets/images/register-hero.png')"
      },
      screens: {
        sm: '320px'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          width: '1210px',
          maxWidth: 'calc(100% - 48px)'
        }
      })
    })
  ]
}
