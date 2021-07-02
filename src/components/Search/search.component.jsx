/* eslint-disable react-hooks/exhaustive-deps */
import "./search.styles.css"
import {API_KEY} from "../../utils/keys"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Card from "../CardDisplay/cardd.component"

const Search = ()=>{
    const [movies,setMovies] = useState([Object])
    const {name} = useParams()
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`
    useEffect(()=>{
        const getMovies = async()=>{
            try{
                const response = await axios.get(URL);
                setMovies(response.data.results)
                console.log("fired")
            }catch(e){
                alert(e)
            }
        }
        getMovies();
    },[name])
    return(
        <div className = "search-container">
            <h1 style = {{paddingBottom : "5vh"}} >Search results for {name}</h1>
            <div className="movies-container" >
                {movies.map(movie => <Card key = {movie.id} id = {movie.id} poster = {movie.poster_path} />)}
            </div>
        </div>
    )
}

export default Search