import "./cardd.styles.css"
import {Link} from "react-router-dom"
import { IMAGE_URL } from "../../utils/base";
import dummy from "./dummy.jpg"

const Card = (props)=>{
    return(
    <div className="card-container" >
        <Link to = {`/${props.id}`}>
            <img alt = "movie-poster" 
            src={IMAGE_URL+props.poster} 
            className="card__img" 
            id={props.id}
            onError = {()=> {
                const image = document.getElementById(props.id)
                try{
                    image.src = dummy
                }catch(e){
                    console.log(e)
                }
            }}
            />
        </Link>
    </div>)
}

export default Card;