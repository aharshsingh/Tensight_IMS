/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#FBF9F9'
      },
      height: {
        '128': '45rem'
      },
      width: {
        '156': '90rem' 
      },
      margin:{
        '156': '60rem',
        '128': '33rem'
      }
    },
  },
  plugins: [],
};
