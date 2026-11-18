/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F1E9',
          50: '#FFFDFC',  // soft white
          100: '#FAF5EE',
          200: '#F7F1E9', // primary warm ivory
          300: '#EFE6D9',
          400: '#E4D6C4',
          500: '#D5C2AC',
        },
        champagne: {
          DEFAULT: '#E8D4B5',
          50: '#FAF4EB',
          100: '#F4E8D7',
          200: '#E8D4B5', // exact champagne
          300: '#DDBF96',
          400: '#D1AB78',
          500: '#C2965D',
        },
        bronze: {
          DEFAULT: '#AD784B',
          100: '#EBDCCE',
          200: '#D4B395',
          300: '#BE8E62',
          400: '#AD784B', // exact antique bronze
          500: '#95633A',
          600: '#7B4F2A',
          700: '#5F3A1B',
        },
        rose: {
          DEFAULT: '#D9BFC1',
          dusty: '#D9BFC1', // exact dusty rose
          muted: '#C9A9AC',
          deep: '#B1868A',
        },
        mauve: {
          DEFAULT: '#A98791',
          light: '#C7AEB5',
          muted: '#A98791', // exact muted mauve
          deep: '#5C444C',  // darkened mauve for high-contrast legible body text
          dark: '#453239',
        },
        burgundy: {
          DEFAULT: '#492A38',
          deep: '#492A38',  // exact deep burgundy
          dark: '#3A1E2B',
          noir: '#28141D',
        },
        plum: {
          light: '#3C2C3C',
          DEFAULT: '#291D29', // exact dark plum
          dark: '#1E141E',
          deep: '#140C14',
        },
        softwhite: '#FFFDFC',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-glow': '0 20px 40px -15px rgba(173, 120, 75, 0.08)',
        'premium-card': '0 10px 30px -10px rgba(41, 29, 41, 0.04), 0 0 1px 1px rgba(255, 253, 252, 0.8) inset',
        'floating-pill': '0 12px 32px -8px rgba(41, 29, 41, 0.06), 0 1px 2px rgba(255, 253, 252, 0.9) inset',
        'elevated': '0 25px 50px -12px rgba(41, 29, 41, 0.08)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
