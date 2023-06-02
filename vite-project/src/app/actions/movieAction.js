import axios from 'axios';
import { actionTypes } from '../actionTypes';

// atılacak istek için ayarlar


export const options = {

    headers: {
        accept: 'application/json',
        Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzFhYTVmNTkwMjBlM2JlODJlNGZkOTA2MGM2ZTYzNiIsInN1YiI6IjY0NzQ5OTM5OTQwOGVjMDBjMjhmYTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKe2uazo7iAtiZVbMS4VQ2mhnm32Kx7p1q6IiVwkdbw',
  
    }
}
// Temel url tanbımlama
axios.defaults.baseURL = 'https://api.themoviedb.org/3'


//asekron aksiyon
export const getFilms = () => async(dispatch)=>{
    //veri çekme işlemi gerçekleşiyor
    axios.get('/movie/popular', options)
    .then((res)=>dispatch({
        type: actionTypes.GET_FILMS,
        payload: res.data.results,
    }))
    
};

// kategori aksiyon

export const getGenres = () => (dispatch) => {
axios
.get('/genre/movie/list', options)
    // çekilen verileri reducera aktarma
    .then((res) =>
      dispatch({
        type: actionTypes.GET_GENRES,
        payload: res.data.genres,
      })
    );
}
//thunk yazım stili
//function deneme() {
 //   return async function(dispatch){
        // veri çekme işlemi
   //     dispatch();
    //}
    //}