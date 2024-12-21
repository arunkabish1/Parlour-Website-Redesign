/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'llg':'50px',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      fontFamily:{
        bebas:[ "Bebas Neue", 'serif'],
        ibm:["IBM Plex Mono", 'monospace'],
        cursive:[ "Caveat", 'cursive'],
        barlow:['Barlow', 'serif'],
        quicksand:['Quicksand', 'serif'],
        sofia:["Sofia Sans Semi Condensed", "serif"]
      },
      
    },
  },
  plugins: [],
}