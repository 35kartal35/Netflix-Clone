import { useEffect } from "react"
import Hero from "../component/Hero"
import MovieCategories from "../component/MovieCategories"
import {useDispatch, useSelector} from "react-redux"
import {getFilms, getGenres} from '../app/actions/movieAction'



const MainPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((store)=> store.movieReducer);
    console.log(state.genres);
    useEffect(()=>{
dispatch(getFilms());

    // kategorileri çek
    dispatch(getGenres());
        //populer film verileri
    }, [])
  return (
    <div className="bg-dark text-light">
      <h1>Ana Sayfa</h1>
      <Hero/>
      <MovieCategories/>
    </div>
  )
}

export default MainPage
