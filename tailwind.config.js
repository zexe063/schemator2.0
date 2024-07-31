/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Dam-sans':['DM Sans', 'sans-serif'],
        'Inter':["Inter", 'sans-serif'],
        'Open-Sans':["Open Sans", 'sans-serif'],
      },
      colors:{
        grey_0:"#FFFFFF",
         
         grey_200: "#fafafa",
         grey_300: "#f6f6f6",
         grey_400 : "f1f1f1",
         blue_primary : "#2866df",
         blue_secondary:"#4f46e5",
         grey_400_secondary :"#e5e7eb",
         grey_1700: "#1717117",
         grey_1700_secondary:"#4b5563",
         background_black:"#111827",
         dashboard_background:"rgba(255,255,255,0.25)",
         dashboard_background_shadow:"rgba(0,0,0,0.05)",
         dashboard_color:"rgba(23,23,23,0.2)",
         background_black:"#1c1e24",
         collection_black:"#24262d",
         border_color:"#2d2f38",
         overlfow_color:"#24262d",
         input_text_color:"#d3d6da",
         nodeElementpopup: "rgb(55, 52, 73)"
     
         
         

         
          
         
      },
      fontWeight:{
        button_weight: "500",
        font_Weight :"400"
      },
      fontSize:{
        font_small_size:"12px",
        font_size:"14px",
        font_medium_size:"26px",
        font_big_size:"35px",

      },
      boxShadow:{
        small_shadow: "0,1px, 0, rgba(236,236,236,0.5)",
        meduim_shadow:"0,0,50px, rgba(23,23,23,0.2)",
     nodeElementpopupShadow: "rgb(55, 52, 73) 0px 0px 0px 2px, rgba(0, 0, 0, 0.33) 2px 2px 5px"
      },
      zIndex:{
        larger:"1000"
      }
    },
  },
  plugins: [],
}

