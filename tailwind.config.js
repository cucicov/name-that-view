const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // adjust to your project
  ],
  theme: {
    extend: {
      colors: {
        limeGreen: '#66ED18',
        forestGreen: '#0E890E',
        tealGreen: '#0E8989',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      'small-phone': '750px',
      'phone': '852px',   // 852x393 (iPhone)
      'ipad': '1194px',    // 1194x834 (iPad)
      'sm': '1280px',    // 1280*1024
      'md': '1366px',    // 1366x768
      'lg': '1440px',   // 1440x1024
      'xl': '1920px',   // 1920x1080
      '2xl': '2560px',  // 2560x1440
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.h-screen-dynamic': {
          height: 'calc(var(--real-vh, 1vh) * 100)',
        },
        '.h-screen-dynamic-pop-up': {
          height: 'calc((var(--real-vh, 1vh) * 100) - 20px)',
        },
      })
    }),
  ],
}
