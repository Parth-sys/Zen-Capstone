import React from "react";
import { Link } from "react-router-dom";

const Card=({data})=>{
    return(
        <div  width="100px" height="150px" style={{border:"1px solid black" }}  >
           {data.map((c,index)=>(
               
               <div width="100px"  height="150px"   key={index}>
               <img src={c.pic} alt={c.name} width="60px" heigth="100px"></img>
               <h1>{c.name}</h1>
               <Link to={`/card/${c.name}`} > View More</Link>
               </div>
               
           ))}



        </div>
    )
}
export default Card;