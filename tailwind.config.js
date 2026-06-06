/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#6B21A5',
      secondary: '#D946EF',
      dark: '#0F0F1A',
      light: '#F8F9FA',
      accent: '#3B82F6',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'system-ui', 'sans-serif'],
    },
    animation: {
      'gradient': 'gradient 8s linear infinite',
      'float': 'float 6s ease-in-out infinite',
      'glow': 'glow 2s ease-in-out infinite',
    },
    keyframes: {
      gradient: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center'
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center'
        }
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      glow: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      }
    },
    backdropBlur: {
      xs: '2px',
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
];