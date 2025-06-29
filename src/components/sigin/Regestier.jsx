import { Link } from "react-router"



function Regestier({title,des,btn }){
 
    return(
        <div className="sign">
     <h1>{title}</h1>
<p>{des}</p>
<input type="text" placeholder="Enter your username" />
<input type="email" placeholder="Enter your email" />
<input type="password" placeholder="Enter your Password" />
<button>{btn}</button>
<span >Have an account? <Link to="/signin" className="button">sign up</Link></span>
        </div>
    )

}
export default Regestier