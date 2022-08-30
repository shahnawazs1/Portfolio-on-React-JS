import React from "react";
const Card=(props)=>{
    return(
    <>
      
                        <div className="col-lg-4 mt-3">
                        <div className="card">
      <img src={props.ImgUrl} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.Title}</h5>
        {/* <NavLink to="/" class="btn btn-primary">Visit Project</NavLink> */}
      </div>
    </div>
                        </div>
                       
                    
    </>
    )
    }
    
    export default Card;