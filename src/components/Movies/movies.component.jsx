import "./movies.styles.css"
import MovieContainer from "../MovieContainer/moviecontainer.component"
import requests from "../../utils/requests"


const Movies = ()=>(
    <div className="movie-container" >
        {Object.keys(requests).map(genre => <MovieContainer key = {genre} genre = {genre} />)}
    </div>
)

export default Movies;
