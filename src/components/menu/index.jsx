import "./styles.css"
import img from "../../images/icon-menu.svg"
import { openNav, closeNav } from "./script"
import close from "../../images/icon-menu-close.svg"

export const Menu = () =>{
    return(
        <nav >
            <div id="buttonMenu" onClick={openNav}><img src={img} alt="" /> </div>
            <div id="menu">
                <ul >
                <div id="buttonClose" onClick={closeNav}><img src={close} alt="" /></div>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">new</a></li>
                 <li><a href="/">popular</a></li>
                 <li><a href="/">trending</a></li>
                 <li><a href="/">categories</a></li>
                </ul>
            </div>
        </nav>
    );
}
