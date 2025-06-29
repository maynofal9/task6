
import { Link, NavLink } from "react-router"
import "./Nav.css"


function Nav({title,items,btn}){

    return(<div className="nav">
        <div className="navg">
        <h2>{title}</h2>
    <ul>
{items?.map((item,index) =>{
    return (
        
        <li key={index} >
        <NavLink
  to={item.url}
  className={({ isActive }) => (isActive ? 'active' : '')}
>
{item.con}
</NavLink>

       </li>
  
    )

})}


    </ul>
    </div>
  <Link  to="/signin"className="button" >{btn}</Link>

 </div>)
}
export default Nav