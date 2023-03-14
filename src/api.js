
const BASE_URL = "https://api.rawg.io/api/"

/*
https://api.rawg.io/api/games?key=61c5af83b1654b988e762e682eadd633

*/

const API_KEY = "?key=61c5af83b1654b988e762e682eadd633";




export const getURL = (v) => `${BASE_URL}${v}${API_KEY}` ;
