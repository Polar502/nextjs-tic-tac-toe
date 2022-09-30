/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
      animation: {
        shake: 'shake 0.6s cubic-bezier(.36, .07, .19, .97) both',
        bounce: 'bounce 0.6s infinite',
        flip: 'flip 2s ease infinite',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translateX(0px)',
          },
          '10%': {
            transform: 'translateX(8px)',
          },
          '20%': {
            transform: 'translateX(0px)',
          },
          '30%': {
            transform: 'translateX(-8px)',
          },
          '40%': {
            transform: 'translateX(0px)',
          },
          '50%': {
            transform: 'translateX(8px)',
          },
          '60%': {
            transform: 'translateX(0px)',
          },
          '70%': {
            transform: 'translateX(-6px)',
          },
          '80%': {
            transform: 'translateX(0px)',
          },
          '90%': {
            transform: 'translateX(6px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
        bounce: {
          '0%': {
            transform: 'translateY(-25%)',
            timing: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0px)',
            timing: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '100%': {
            transform: 'translateY(-25%)',
            timing: 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
        flip: {
          '0%': {
            transform: 'perspective(10em) rotateY(0)',
            transitionTimingFunction: 'ease-out',
          },
          '40%': {
            transform: 'perspective(10em) translateZ(150px) rotateY(170deg)',
            transitionTimingFunction: 'ease-out',
          },
          '50%': {
            transform: 'perspective(10em) translateZ(150px) rotateY(190deg) scale(1)',
            transitionTimingFunction: 'ease-in',
          },
          '80%': {
            transform: 'perspective(10em) rotateY(360deg) scale(.95)',
            transitionTimingFunction: 'ease-in',
          },
          '100%': {
            transform: 'perspective(10em) scale(1)',
            transitionTimingFunction: 'ease-in',
          },
        },
      },
    },
  },
  plugins: [],
}
