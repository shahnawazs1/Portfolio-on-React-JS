import React from "react";
import Same from "./Same";
import aBbanner from "../src/images/abbanner.jpg"
 const About=()=>{
    return(
    <>
    <Same titlem="About Me" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies turpis sed dui pulvinar scelerisque. Vivamus nec eros arcu. Curabitur interdum molestie magna, sed porta nulla varius non. Curabitur feugiat molestie suscipit. Aliquam iaculis lorem quis pharetra pretium. Donec dolor nulla, ornare sed felis eu, tincidunt elementum lacus. Vestibulum hendrerit vulputate ex, id gravida est fringilla vel. Duis sagittis pellentesque tellus nec tempor. Sed faucibus urna eget metus pulvinar lacinia. Morbi id blandit orci. Praesent hendrerit massa nunc, quis finibus neque condimentum vel. Vivamus sed gravida arcu, in volutpat sem. Praesent gravida sodales interdum." imgbanner={aBbanner} buttonName="Contact Me" linkto={"/contact"}/>
    </>
    )
 }

 export default About;