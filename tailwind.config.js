/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(136deg, #131520 0%, rgba(19, 21, 32, 0.00) 100%)',
        'gradient-border': 'linear-gradient(to bottom, #2A2C39 0%, rgba(102, 104, 118, 0.00) 100%)',
        'gradient-time-line-blue' : 'linear-gradient(180deg, rgba(79, 106, 255, 0.00) 0%, #4F6AFF 100%)',
        'gradient-time-line-white' : 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
        'bg-skills' : "url('/src/assets/bg-skills.png')"
      },
      colors: {
        blackpearl: {
          '50' : '#f1f4fc',
          '100': '#ceddf9',
          '200': '#9db9f2',
          '300': '#6588e3',
          '400': '#355ccc',
          '500': '#1c3fb0',
          '600': '#132e8e',
          '700': '#142771',
          '800': '#15225a',
          '900': '#16204b',
          '950': '#02040f',
        },
        gray: {
          '50' : '#f6f7f9',
          '100': '#ecedf2',
          '200': '#d5d8e2',
          '300': '#b0b6c9',
          '400': '#858fab',
          '500': '#667191',
          '600': '#515a78',
          '700': '#424962',
          '800': '#3a4052',
          '900': '#333747',
          '950': '#20222c',
        },
      },
      screens: {
        'mobile': '380px',
        'tablet': '780px',
        'desktop': '1024px',
      },
      lineHeight: {
        lg: '120px'
      },
      fontSize: {
        xxs : '96px',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'floating': {
          '0%, 100%': {
            transform: 'translateY(0)' // Posição inicial e final, sem alteração
          },
          '50%': {
            transform: 'translateY(-10px)' // Posição intermediária, flutuando para cima
          }
        },
        'rotate': {
          'from': {
            transform: 'rotate(0deg)' // Posição inicial e final, sem alteração
          },
          'to': {
            transform: 'rotate(360deg)' // Posição inicial e final, sem alteração
          },
        }
      },
      animation: {
          'fade-in-down': 'fade-in-down 2s ease-in-out',
          'fade-in-up' : 'fade-in-up 2s ease-in-out',
          'floating' : 'floating 3s infinite',
          'rotate' : 'rotate 5s linear infinite'
      },
    },
  },
  plugins: [],
}
