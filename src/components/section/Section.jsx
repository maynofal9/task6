
import "./section.css"

function Section({title,items}){

return(
<div className="section">
<h1>{title}</h1>

<div className="cards">
{items?.map((item)=>{
return(
    
    <div className="card">
      
    <img src={item.im}  />
    <span>{item.name}</span>
    <div className="ti"><h2>{item.title2}</h2> <img src="../public/assets/images/arrow-up-right.svg"  /></div>
    <p>{item.des}</p>
   </div>
)



})}</div>

</div>

)

}
export default Section