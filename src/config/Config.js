
let GLOBAL_URL = "";

if(process.env.NODE_ENV === 'development') {
    GLOBAL_URL = 'https://hnbguiqac.herokuapp.com/api'
  }
  
  if(process.env.NODE_ENV === 'production') {
    GLOBAL_URL = 'https://hnbguiqac.herokuapp.com/api'
  }
// https://corsanywhere.herokuapp.com/https://freereddittesting.000webhostapp.com/api/

export {GLOBAL_URL}