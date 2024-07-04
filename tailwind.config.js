/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundColor:{
        primaryBg:"#E8FBFF",
        secondaryBg:"#EB7150"

      },
      textColor:{
        buttonPrimaryColor:"#00732F",
        headerMenuColor:"#6D6E71"
      },
      borderColor:{
        menuColor:"#00732F",
      }
    },
  },
  plugins: [],
}