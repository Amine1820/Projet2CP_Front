/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluefonce:"#2E3840",
        primary:"#F9DBBB",
        rouge:"#FF0303"
      }
    },
  },
  plugins: [],
  important : true ,
  
  mode: 'jit',
  purge: [

    './public/**/*.html',

    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    borderRadius: {
      xl: '0.75rem',
    },
    
    colors: {
      yellow: {
        '300': 'rgba(249, 219, 187, 1)',
      },
      white:'#ffffff',
      red:'rgba(249, 219, 187, 0.33)',
      transparent:'rgba(0,0,0,0)',
      black:'#000000',
      blue:{
        '500':'#2E3840',
      }
    },    
    extend: {},
  }, 
  plugins: [],
}

