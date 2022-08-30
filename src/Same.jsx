import React from "react";
import { NavLink } from "react-router-dom";
import banner from "../src/images/dev.jpg";
const Same=(props)=>{
    return(
    <>
   <section id="header" className="d-flex align-items-center">
   <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
               <div className="row">
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
               <h1>{props.titlem} <span className="grd"><strong>{props.stitle} </strong></span></h1>
               <p className="mt-0 mb-3">{props.para}</p>   
               <div className="mt-3">
                  <NavLink to={props.linkto} className="btn-hire-Me">{props.buttonName}</NavLink>
               </div>
               </div>
               <div className="col-md-6 order-1 order-lg-2 header-img">
               <img src={props.imgbanner} className="img-fluid"/>  
               </div> 
               </div>
               </div>
               </div>
               </div>
   </section>
    </>
    )
 }

 export default Same;