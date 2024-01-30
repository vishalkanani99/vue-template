/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        position: "right, left, top, bottom, margin, padding",
        textColor: "color",
      },
      keyframes: {
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-in-left": {
          '0%': { opacity: 0, transform: 'translate3d( -50%, 0, 0 )' },
          '100%': { opacity: 1, transform: 'translateZ( 0 )' },
        },
        "fade-in-right": {
          '0%': { opacity: 0, transform: 'translate3d( 50%, 0, 0 )' },
          '100%': { opacity: 1, transform: 'translateZ( 0 )' },
        },
        "fade-in-up": {
          '0%': { opacity: 0, transform: 'translate3d( 0, 50%, 0 )' },
          '100%': { opacity: 1, transform: 'translateZ( 0 )' },
        },
        "fade-out-down": {
          '0%': { opacity: 1, transform: 'translate3d( 0, -50%, 0 )' },
          '100%': { opacity: 0, transform: 'translateZ( 0 )' },
        },
        "fade-in-down": {
          '0%': { opacity: 0, transform: 'translate3d( 0, -50%, 0 )' },
          '100%': { opacity: 1, transform: 'translateZ( 0 )' },
        },
        "fade-out-up": {
          '0%': { opacity: 1, transform: 'translate3d( 0, 50%, 0 )' },
          '100%': { opacity: 0, transform: 'translateZ( 0 )' },
        },
        "shake": {
          '0%, 100%': { transform: 'translateZ( 0 )' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px,0,0)' },
          '20%, 40%, 60%, 80%': { transform: 'translate3d(10px,0,0)' },
        }
      },
      animation: {
        "fade-out": "fade-out 250ms ease-in-out",
        "fade-in": "fade-in 250ms ease-in-out",
        'fade-in-left-fast': 'fade-in-left .15s ease-in-out',
        'fade-in-right-fast': 'fade-in-right .15s ease-in-out',
        'fade-in-up-fast': 'fade-in-up .15s ease-in-out',
        'fade-out-down-fast': 'fade-out-down .15s ease-in-out',
        'fade-in-down-fast': 'fade-in-down .15s ease-in-out',
        'fade-out-up-fast': 'fade-out-up .15s ease-in-out',
        'shake': 'shake .5s ease-in-out',
      },
    },
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

