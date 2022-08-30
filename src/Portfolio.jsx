import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import PortfolioData from "./PortfolioData";
const Portfolio=()=>{
return(
<>
<div className="container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="Heading2 text-center mb-3 mt-3"><h2>My Projects</h2></div>
                    <div className="row">
                        {
                            // <Card/>
                            PortfolioData.map((val , index)=>{
                              return <Card ImgUrl={val.ImgUrl} Title={val.Title}/>
                            })
                        }
                        </div>
                        </div>
                        </div>
                        </div>   
</>
)
}

export default Portfolio;