/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
       'shake': 'shake 0.5s cubic-bezier(.36, .07, .19, .97) both',
      },
      keyframes: {
        'shake' : {
          '0%':{
            transform: 'translateX(0px)'
          },
          '10%':{
            transform: 'translateX(8px)'
          },
          '20%':{
            transform: 'translateX(0px)'
          },
          '30%':{
            transform: 'translateX(-8px)'
          },
          '40%':{
            transform: 'translateX(0px)'
          },
          '50%':{
            transform: 'translateX(8px)'
          },
          '60%':{
            transform: 'translateX(0px)'
          },
          '70%':{
            transform: 'translateX(-8px)'
          },
          '80%':{
            transform: 'translateX(0px)'
          },
          '90%':{
            transform: 'translateX(8px)'
          },
          '100%':{
            transform: 'translateX(0px)'
          },
        }
      },
    },
  },
  plugins: [],
}
