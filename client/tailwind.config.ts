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
          dark: '#2296F3',
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
        success: '#00B46E',
        warning: '#FFA514',
        error: '#E62D5A',
      },
    },
  },
  plugins: [],
};
