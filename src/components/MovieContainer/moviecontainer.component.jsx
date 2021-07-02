/* eslint-disable react-hooks/exhaustive-deps */
import "./moviecontainer.styles.css"
import { useState,useEffect } from "react";
import axios from "axios";
import requests from "../../utils/requests"
import Card from "../CardDisplay/cardd.component";

const MovieContainer = (props)=>{
    const [movies,setMovies] = useState([Object])
    const URL = requests[props.genre]
    useEffect(()=>{
        const getMovies = async ()=>{
            try{
                const response = await axios.get(URL)
                setMovies(response.data.results.splice(0,8))
            }catch(e){
                alert(e)
            }
        }
        getMovies()
    },[])
    return(
    <div className="movie-genres">
        <h1>{props.genre} Movies</h1>
        <br/>
        <div className="genre-cards" >
            {movies.map(movie => (
                <Card key= {movie.id} id = {movie.id} title = {movie.title} poster = {movie.poster_path}/>
            ))}
        </div>
    </div>
)}

export default MovieContainer;