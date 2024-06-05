/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Dam-sans':['DM Sans', 'sans-serif']
      },
      colors:{
        flowred:"#ff0073",
        customgreeen :"#21a935",
        customblue :"#0073ff",
        customred :"#ff0073",
        customyellow :"#ffcc00",
        customblack :"#000000",
        customwhite :"#ffffff",
      }
    },
  },
  plugins: [],
}

