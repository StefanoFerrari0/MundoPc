module.exports = {
  theme: {
    screens: {
      'xs': {'min': '320px', 'max': '480px'},
      'sm': {'min': '481px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1280px'},
      'xl': {'min': '1281px'},
    },
    variants: {
     display: ['responsive', 'hover', 'focus'],
     visibility: ['responsive', 'hover', 'focus'],

    },
    extend: {
    colors: { rojo: "#EE2056",
            negro: "#211F2D",
            blanco: "#FFFDFD",
            verde: "#21D975"
    },  
    fontFamily:{
          roboto: ['Roboto'],
          robotoC: ['Roboto Condensed']
    },
    fontSize: {
      '7xl': '5rem',
      '8xl': '6rem',
    },   
  }
}
}
