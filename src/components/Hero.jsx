
import "./Hero.css"
function Hero({title,des ,btn}){

return(
    <div className="hero">
<h1>{title}</h1>
<p>{des}</p>
<div className="email">
<input type="email"  placeholder="Enter your email"/>
<button>{btn}</button>
</div>
    </div>
)


}
export default Hero 