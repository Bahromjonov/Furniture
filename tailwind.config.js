/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        'base':'1440px',
        '546':'546px',
        '643':'643px',
        '229':'2296px',
        '1145':'1145px',
        '1163':'1180px',
        '514':'514px',
        '381':'399px',
        '482':'482px'
        
      },
      fontSize:{
        '34':'34px',
        '52':'52px',
        '32':'32px',
        '18':'18px'
        
      },
      colors: {
        br:{
          'havorang':'#054C73',
          'kok':'#054C73',
          'toqhavorang':'#F2F5FF',
          'kulrang':'#666666',
          'ochqora':'#011C42'
        }
      },
      backgroundColor:{
        'qaymoqrang':'#DFE9F4',
        
      },
      spacing:{
        '74':'74px',
        '60':'60px',
        '100':'100px',
        '25':'-25px'
      },
      fontFamily:{
        'motserrat':['Montserrat', 'sans-serif']
      },
      lineHeight:{
        '65':'65px',
        '39':'39px',
        '29':'29.26px'
      },
      borderRadius:{
        '10':'10px',
        '50':'50px',
        '3':'3px'
      },
      boxShadow:{
        'shadow':' #00000040'
      }
    },
  },
  plugins: [],
}