const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode with a class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        back: {
          light: '#FFFFFF',
          dark: '#121820',
        },
        "txt": {
          light: '#1E1E1E',
          dark: '#ECEFF4',
        },
        'txt-sec': {
          light: '#646E78',
          dark: '#8C96A0',
        },
        accent: {
          light: '#2296F3',
          dark: '#3C6E91',
        },
        brd: {
          light: '#D2D7DC',
          dark: '#3C4146',
        },
        hvr: {
          light: '#F0F8FF',
          dark: '#1E2832',
        },
        muted: {
          light: '#F8FAFC',
          dark: '#1A222A',
        },
        "btn": {
          bg: "#0095f6",
          txt: '#FFFFFF',
        },
        "btn-dark": {
          bg: "#1E3A5F",
          txt: '#D1D5DB',
        },
        secondary: {
          light: '#FFB703',
          dark: '#FF9700', // Vibrant orange tones
        },
        highlight: {
          light: '#FFD6A5', // Soft peach
          dark: '#E63946', // Bold coral red
        },
        neutral: {
          light: '#F3F4F6', // Soft grey
          dark: '#2D3748', // Cool dark grey
        },
        info: {
          light: '#5BC0EB', // Bright sky blue
          dark: '#3B82F6', // Rich blue
        },
        success: '#00B46E',
        warning: '#FFA514',
        error: '#E62D5A',
        tertiary: {
          light: '#ABFFE5', // Mint green
          dark: '#1C4532', // Deep forest green
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
        allertaStencil: ['var(--font-allerta-stencil)'],
      },
      boxShadow: {
        'light-card': '0px 8px 16px rgba(0, 0, 0, 0.6)',
        'light-button': '0px 2px 4px rgba(0, 0, 0, 0.2)',
        'light-hover': '0px 4px 8px rgba(0, 0, 0, 0.15)',
        'dark-card': '0px 8px 16px rgba(128, 128, 128, 0.3)',
        'dark-button': '0px 2px 4px rgba(0, 0, 0, 0.4)',
        'dark-hover': '0px 4px 8px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
