import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  future: {
    logical: false,
  },
  theme: {
    extend: {
      fontFamily: {
        principal: ['Outfit', defaultTheme.fontFamily.sans],
        titulares: ['Cinzel', defaultTheme.fontFamily.sans],
      },

      width: {
        'contenedor-sm': "50%"
      }
    },
  },
  plugins: [forms, require('flowbite/plugin')],
}