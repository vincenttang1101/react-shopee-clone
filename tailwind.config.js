// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial']
      },
      colors: {
        primaryColor: '#ee4d2d'
      },
      backgroundImage: {
        hero: "url('./src/assets/images/register-hero.png')"
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '1210px',
          maxWidth: 'calc(100% - 48px)',
          marginInline: 'auto'
        }
      })
    })
  ]
}
