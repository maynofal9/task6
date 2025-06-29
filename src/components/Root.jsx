import { Outlet } from "react-router";


import Footer from "./Footer/Footer";
import Nav from "./header/Nav";


function Root(){

return(
    <>
 
   <Nav  title="YourName"items={[{con:"Home",url:"/"},{con:"About",url:"/about"}]} btn="sign in" />

<Footer/>
    <Outlet/>

</>
)

}
export default Root