module.exports = {
  purge: ['./src/*{.js}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        messenger_theme:'#f54404',
        messenger_green:'',
        messenger_dark:{
          DEFAULT: '#030303',
          brightest:'#272728',
          brighter:'#1a1a1a',
        },
        messenger_border:{
          DEFAULT:'#343536',
        },
        messenger_text:{
          DEFAULT: 'rgb(215,218,220)',
          darker: '#818384',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
