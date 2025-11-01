/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // AXYS Brand Colors
        primary: '#288CE2',        // Bleu Axys
        secondary: '#1BA89A',      // Teal Moderne
        neutral: {
          dark: '#0F1419',         // Noir Premium
          light: '#FFFFFF',        // Blanc Pur
          gray: '#6E7E91',         // Gris Support
          'light-bg': '#F5F7FA'    // Gris Clair Arrière-plan
        }
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        semibold: '600',
        bold: '700'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-on-hover': 'scaleOnHover 0.3s ease',
        'slide-down': 'slideDown 0.2s ease',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleOnHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl-plus': '1.25rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'primary': '0 4px 14px 0 rgba(40, 140, 226, 0.25)',
      }
    },
  },
  plugins: [],
}