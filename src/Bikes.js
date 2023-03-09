import React from 'react';
import Card from 'react-bootstrap/Card';
import {useEffect,useState,useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Loading from './Loding'
import Error from './Error'

export function Bikes(){
    


    useEffect( ()=>{
      const ridenow=async()=>{

        setloading(true)

        try {
          var response=await axios.get('http://localhost:5000/bikes')
          var data=response.data;
          console.log(data);
          setbikes(data)
          setloading(false)
          
        } catch (error) {
        
         console.log(error)
         seterror(error)

        }

      }
        
     ridenow();
      },[])
    
        
         const [bikes,setbikes]=useState([]);
          const [loading,setloading]=useState(false)    
          const [error,seterror]=useState();

      
    
    let navigate=useNavigate();
    return(
       
       < div className='row justify-content-center m-1'>
        <div className=" bikes">
       {loading && (<Loading></Loading>)}
       {error &&( <Error error="Network  issues" ></Error>)}
       {bikes.map((b,index)=>(
         <div key={index} style={{margin:"5px"}}>
        <Card className="bikecard" style={{ width: '18rem'  }} >
        <Card.Img variant="top" src={b.image} />
        <Card.Body>
          <Card.Title style={{color:"black"}}>{}</Card.Title>
          <Card.Text>
        <h6>Hour:  {b.price}</h6>
        <hr></hr>
         <h6> Month:  {b.price1}</h6>
         <hr></hr>
            {b.name}
          </Card.Text>
          <Button variant="primary"  onClick={()=>navigate(`/Bikedeatails/${b.name}`)}> Get  </Button>
        </Card.Body>
      </Card>
      </div>
       
       
       ))}
       </div>
       
       
       </div>
   
   
        )
       }
       
     