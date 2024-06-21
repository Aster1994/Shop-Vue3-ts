/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'
import daisyui0 from 'daisyui/src/theming/themes'
import colors from './src/assets/colors.js'

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  darkMode: ['class', '[data-theme="retro"]'],

  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        retro: {
          ...daisyui0['retro'],
          secondary: colors.light.secondary,
          'secondary-content': colors.light.secondaryContent
        }
      }
    ],
    darkTheme: 'retro', // name of one of the included themes for dark mode
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    prefix: 'd-'
  }
}
