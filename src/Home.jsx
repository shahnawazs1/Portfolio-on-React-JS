import React from "react";
import { NavLink } from "react-router-dom";
import banner from "../src/images/dev.jpg";
import Same from "./Same";
const Home=()=>{
    return(
    <>
   <Same titlem="Shahnawaz Saifi" 
   stitle="Web Developer" 
   linkto={"/contact"} 
   imgbanner={banner} 
   para="Iam a Freelancer Web Developer" 
   buttonName="Hire Me!!"/>
    </>
    )
 }

 export default Home;