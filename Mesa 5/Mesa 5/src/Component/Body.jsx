import React from "react";
import Home from "./Home";
import homeStyle from './Home.module.css'




const Body = () => {


return(
<div className={homeStyle.body}>
<h1 className={homeStyle.h1}>Productos</h1>
<Home/>

</div>)


}
export default Body