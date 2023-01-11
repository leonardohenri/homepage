import "./styles.css"

export const Menu = () =>{
    return(
        <nav >
            <ul className="menu">
             <li><a href="/">Home</a></li>
             <li><a href="/">new</a></li> 
             <li><a href="/">popular</a></li>
             <li><a href="/">trending</a></li>
             <li><a href="/">categories</a></li>  
            </ul>
        </nav>
    );
}