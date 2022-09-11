import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Bikes } from "./Bikes";
 export function Bikedeatails({data}){

    const{name}=useParams();

     let navigate=useNavigate();

   console.log(data)

    return(
      
        <div className="row  justify-content-center mt-4" >
          
        {data.filter(c=>c.name === name).map((t,index)=>(

          <div className="col-md-8"   key={index}  >
          

     <Card className="bg-dark text-white" >
      <Card.Body className="cardbody">   
  <Card.Img src={t.image} alt="Card image"  style={{color:"black"}}  bottom="true"/>
  <Card.Text className="cardtext">Vehical Type:Sports</Card.Text>
  <Card.Text className="cardtext">ABS  Single Channel</Card.Text>
  <Card.Text className='cardtext'> Rate per/hr:{t.price}</Card.Text>
  <Card.Text className="cardtext">Rate per/month: {t.price1} </Card.Text>
  <Card.ImgOverlay>
    <Card.Title  >{t.name}</Card.Title>
    
    <Button onClick={()=>navigate(`/Booking/${t.name}`)} >Book </Button>

  </Card.ImgOverlay>
  </Card.Body>
  <Card.Footer>{t.name}</Card.Footer>
</Card>

        </div>
        ))}
        <Bikes></Bikes>
</div>
    )

}