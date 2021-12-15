module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgOrange: '#FF6600',
        bgBlue: '#0F5499',
      },
      boxShadow: {
        box: '-50px 50px 50px -50px rgba(0.015, 0.015, 0.015, 0.015), 30px 30px 30px 30px rgba(0.04, 0.04, 0.04, 0.04)',
      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Montserrat: ['Montserrat']
    },

  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: []
}
