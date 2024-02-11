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
      colors: {
        primaryColor: '#ee4d2d'
      },
      backgroundImage: {
        hero: "url('./src/assets/images/register-hero.png')"
      },
      screens: {
        xs: '320px'
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
        },
        '.footerTitle': {
          marginBottom: '13px',
          fontSize: '1.1rem',
          fontWeight: '700',
          textTransform: 'uppercase'
        }
      })
    })
  ]
}
