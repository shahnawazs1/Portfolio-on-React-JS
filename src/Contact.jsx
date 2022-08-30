import React from "react";
import { useState } from "react";
 const Contact=()=>{
   
   const [data ,setData] = useState({
      Name:"",
      Phone:"",
      Email:"",
      Msg:"",
   });
   const InputEvent=(e)=>{
    
    const {name, value} = e.target;
      
      setData((prevVal)=>{
      
        return {...prevVal , [name]: value}
      })
   }
   const formSubmit=(e)=>{
    e.preventDefault();
    alert(`Your Name ${data.Name}`);
   }
   
   return(
    <>
    <div className="container">
    <div className="heading2 mt-3 mb-3 text-center"><h2>Contact Me</h2></div>
    <div  className="row">
      <div className="col-10 mx-auto">
     <form onSubmit={formSubmit}>
  <div className="col mb-2">
    <input type="text" className="form-control" name='Name' value={data.Name} onChange={InputEvent} placeholder="Full name" aria-label="First name" />
  </div>
  <div className="col mb-2">
    <input type="text" className="form-control" name='Email' value={data.Email} onChange={InputEvent} placeholder="Email" aria-label="Last name" />
  </div>
  <div className="col mb-2">
    <input type="text" className="form-control" name='Phone' value={data.Phone} onChange={InputEvent} placeholder="Phone No." aria-label="Last name" />
  </div>
  <div className="col mb-2">
    <textarea className="form-control h-75" name='Msg' value={data.Msg} onChange={InputEvent} placeholder="Message" aria-label="Last name" ></textarea>
</div>
<div className="col mt-3 text-center">
   <button className="btn btn-outline-primary w-25">Submit</button>
</div>
</form>
      </div>
    </div>
    </div>
    
    </>
    )
 }

 export default Contact;