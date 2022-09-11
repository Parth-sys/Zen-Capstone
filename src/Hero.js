import React from 'react';
import Card from './Card';

const Hero=({data})=>{
    return(

        
        <div  style={{border:"1px solid black", backgroundColor:"teal", display:"flex", }}>
            <h1> Hero</h1>
          <div>  
         <Card data={data}/>
         </div>
        </div>
        
    )
}

export default Hero;