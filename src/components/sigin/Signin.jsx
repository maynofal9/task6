

import { Link } from "react-router"
import "./sign.css"
function Signin({title,des,btn }){
 
    return(
        <div className="sign">
     <h1>{title}</h1>
<p>{des}</p>
<input type="email" placeholder="Enter your email" />
<input type="password" placeholder="Enter your Password" />
<button>{btn}</button>
<span >Have an account ?<Link to="/siginup" className="button">login</Link></span>
        </div>
    )

}
export default Signin