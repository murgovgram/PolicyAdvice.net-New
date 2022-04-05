module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgOrange: '#FF6600',
        bgBlue: '#0F5499',
        bgHoverOrange: '#E05A00',
      },
      boxShadow: {
        box: '0px 0px 10px 10px rgba(0.010, 0.010, 0.010, 0.010), 10px 10px 10px 10px rgba(0.02, 0.02, 0.02, 0.02)',
      },
      spacing: {
        200: '28rem',
      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { Phone }

      'md': '768px',
      // => @media (min-width: 768px) { Tablet }

      'lg': '1024px',
      // => @media (min-width: 1024px) { Laptop }

      'xl': '1280px',
      // => @media (min-width: 1280px) { Big }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { Big }
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
