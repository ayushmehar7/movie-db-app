import "./footer.styles.css"
import logo from "../../logo.png"
import { GrLinkedin,GrGithub,GrMail } from "react-icons/gr";
const Footer = ()=>(
    <footer className="footer" >
        <img src = {logo} alt = "logo" className="footer__logo"/>
        <div className="footer__about">
            <h3>About Us</h3>
            <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula. 
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam 
                quis tristique lectus. Aliquam in arcu eget velit pulvinar 
                dictum vel in justo.Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s. Our company 
                is completely creative, clean and 100% responsive website. Put your 
                business into next level with us.
            </p>
        </div>
        <ul className="footer__links" >
            <li>
                <a href="https://www.linkedin.com/in/ayush-nutan-mehar-a2864817a/">
                    <GrLinkedin className="footer__links__logo" color="white" />
                </a>
            </li>
            <li>
                <a href="https://github.com/ayushmehar7" >
                    <GrGithub className="footer__links__logo" color="white" />
                </a>
            </li>
            <li>
                <a href="mailto:meharayush37@gmail.com" >
                    <GrMail className="footer__links__logo" color="white" />
                </a>
            </li>
        </ul>
    </footer>
)

export default Footer