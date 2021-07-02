/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import "./moviedetail.styles.css"
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import {API_KEY} from "../../utils/keys"
import { IMAGE_URL } from "../../utils/base";
import {BsStarFill,BsStarHalf} from "react-icons/bs"
import {SiImdb } from "react-icons/si";
import {FcHome} from "react-icons/fc"
import dummy from "./dummy.jpg"
import dummyP from "../CardDisplay/dummy.jpg"
const MovieDetail = (props)=>{
    const {id} = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const [movie,setMovie] = useState({})
    useEffect(()=>{
        const loadMovie = async()=>{
            try{
                const response = await axios.get(URL)
                setMovie(response.data)
            }catch(e){
                alert(e);
            }
        }
        loadMovie();
    },[])

    const getNR = (x)=>{
        x*= 10
        let low = x - x%5
        let high = low+5
        if(x-low < high-x){
            return low/10
        }
        else{
            return high/10
        }
    }

    const getStars = (rating)=>{
        if(Math.ceil(rating) === Math.floor(rating)){
            return [rating,0]
        }else{
            return [Math.floor(rating),1]
        }
    }

    const GetDate = ({date})=>{
        const d = new Date(date)
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return(
            <p style = {{paddingRight : "5vh"}}>{"Release Date : "}{d.getDate()}{"   "}{monthNames[d.getMonth()]}{"   "}{d.getFullYear()}</p>
        )
    }

    const getGenres = (gens)=>{
        const G = gens.map(g => g.name)
        return G.join()
    }

    const StarRating = ({rating})=>{
        let nRating = rating/2;
        nRating = getNR(nRating);
        const [Fstars,Hstars] = getStars(nRating);
        return(
        <div className="movie-rating">
            {[...Array(Fstars)].map((i,e)=> <BsStarFill className="star" key = {e} color = "yellow"/>)}
            {[...Array(Hstars)].map((i,e)=> <BsStarHalf className="star" key = {e} color = "yellow"/>)}
        </div>
        )
    }
    return(
        <div className="movie-detail-container" >
            <img className="movie-backdrop" src={IMAGE_URL+movie.backdrop_path} 
            id = {movie.id}
            alt="movie-backdrop"
                onError = {()=> {
                    const image = document.getElementById(movie.id)
                    try{
                        image.src = dummy
                    }catch(e){
                        console.log(e)
                    }
                }}
            />
            <div className="movie-details">
                <img  src = {IMAGE_URL+movie.poster_path} id={movie.id + "P"} alt="movie-logo" className="movie-logo"
                  onError = {()=> {
                    const image = document.getElementById(movie.id + "P")
                    try{
                        image.src = dummyP
                    }catch(e){
                        console.log(e)
                    }
                }}
                />
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    {movie.vote_average ? <StarRating rating = {movie.vote_average} /> : "N/A"}
                    <p>{"Genre : "}{movie.genres ? getGenres(movie.genres) : "N/A"}</p>
                    <div className="movie-time-details" >
                        <GetDate date = {movie.release_date} />
                        <p>{"Duration : "} {movie.runtime} {" minutes"}</p>
                    </div>
                    <p>{movie.overview}</p>
                    <div className="movie-links" >
                        <a href = {`https://www.imdb.com/title/${movie.imdb_id}`} 
                        style = {{backgroundColor : "#f3ce13"}}
                        target = "_blank"
                        className="movie-links-button" >
                            <SiImdb className="movie-links-logo" />
                            <p style={{marginTop : "1.25vh",marginLeft : "1vh"}}>IMDb Page</p>
                        </a>
                        <a href={`${movie.homepage}`} 
                        style = {{backgroundColor : "#0e4d92"}}
                        className="movie-links-button" 
                        target = "_blank"
                        >
                            <FcHome className="movie-links-logo" />
                            <p style={{marginTop : "1.25vh",marginLeft : "1vh"}}>Visit Homepage</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail