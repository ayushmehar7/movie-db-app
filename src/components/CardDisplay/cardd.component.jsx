import "./cardd.styles.css"
import {Link} from "react-router-dom"
import { IMAGE_URL } from "../../utils/base";
import dummy from "./dummy.jpg"
import {BsStarFill} from "react-icons/bs"
const Card = (props)=>{
    return(
    <div className="card-container" 
        onMouseEnter = {()=>{
            const el = document.getElementById(props.id+props.genre)
            el.style.display = "block"
        }}
        onMouseLeave = {()=>{
            const el = document.getElementById(props.id+props.genre)
            el.style.display = "none"
        }}
    >
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
        <div className="card-details" id={props.id + props.genre} >
            <p className="card-details-item" ><BsStarFill color="yellow"/> {props.rating}/10</p>
        </div>
    </div>)
}

export default Card;