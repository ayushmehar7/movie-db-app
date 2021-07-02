import { API_KEY } from "./keys"
import {BASE_URL} from "./base"
const requests = {
    Action: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=28`,
    Adventure: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=12`,
    Comedy: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=35`,
    Horror: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=27`,
    Thriller: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=53`,
    Crime: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=80`,
    Mystery: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=9648`,
    Romance: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Documentaries: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=99`,
    Science: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=878`,
    Drama: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=18`,
    Animation: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=16`,
    Family: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10751`,
    Fantasy: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=14`
 }

 export default requests