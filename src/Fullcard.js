import React from "react";
import { useParams } from "react-router";

const Fullcard=({data})=>{

 const {name}=useParams()


    return(
        
         <>
        
        { data.filter(c=>c.name === name).map((c,index)=>(
            <div width="100px" heigth="100px"  key={index}>
              <img width="50px" heigth="50px" alt="card" src={c.image}  ></img> 
              <p>{c.name}</p> 


            </div>
    ))}  

        

        
      </>    
         
        
        
        
    
    )
}

export default Fullcard;