import "./navbar.styles.css"
import logo from "../../logo.png"
import { AiOutlineSearch } from "react-icons/ai";
import {Link} from "react-router-dom"
import { useState } from "react";
const Navbar = ()=>{
    const [name,setName] = useState("")
    return(
    <nav className="navbar">
        <Link to = "/"><img src={logo} alt="logo" className = "navbar__img" /></Link>
        <div className="navbar__search">
            <input className="navbar__input" type = "text" placeholder = "Search movies....." 
            onChange = {(event)=> setName(event.target.value)} />
            { name ? <Link to={`/search/${name}`}><AiOutlineSearch className="navbar__button" color="white"/>
                    </Link> : 
                    <AiOutlineSearch className="navbar__button" color="white"/>
            }
        </div>
    </nav>
)}

export default Navbar;