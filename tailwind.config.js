/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(136deg, #131520 0%, rgba(19, 21, 32, 0.00) 100%)",
        "gradient-border":
          "linear-gradient(to bottom, #2A2C39 0%, rgba(102, 104, 118, 0.00) 100%)",
          "radial-gradient":
          "radial-gradient(90% 80% at center 0%, rgba(255,255,255,0.09) 3%, rgba(98, 255, 179, 0) 70%, rgba(98, 255, 179, 0) 100%)",
        "gradient-time-line-blue":
          "linear-gradient(180deg, rgba(79, 106, 255, 0.00) 0%, #77e123 100%)",
        "gradient-time-line-white":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        "bg-skills": 
          "url('/src/assets/bg-skills.png')",
      },
      colors: {
        blackpearl: {
          50: "#f1f4fc",
          100: "#ceddf9",
          200: "#9db9f2",
          300: "#6588e3",
          400: "#355ccc",
          500: "#1c3fb0",
          600: "#132e8e",
          700: "#142771",
          800: "#15225a",
          900: "#16204b",
          950: "#060606",
        },
        gray: {
          50: '#e6e6e6',
          100: '#cccccc',
          200: '#b3b3b3',
          300: '#999999',
          400: '#808080',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#262626',
          900: '#1f1f1f',
          950: '#0C0C0C',
        }
      },
      screens: {
        mobile: "380px",
        tablet: "780px",
        desktop: "1024px",
      },
      lineHeight: {
        lg: "120px",
      },
      fontSize: {
        xxs: "96px",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        floating: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 10))' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'reveal' : {
          '0%': {
            transform: 'translate(0,100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0,0)',
            opacity: '1'
          }
        }
      },
      animation: {
        "fade-in-down": "fade-in-down 2s ease-in-out",
        "fade-in-up": "fade-in-up 2s ease-in-out",
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
        'floating': "floating 3s infinite",
        'rotate': "rotate 5s linear infinite",
        'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s'
      },
    },
  },
  plugins: [],
};
