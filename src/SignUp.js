
import React ,{useState,useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import Success from "./Success";
import Error from "./Error";

 export function SignUp(){

    const [email,setemail]=useState("");
    const[username,setusername]=useState("")
   const [password,setpassword]=useState("");
   const [suc,setsuc]=useState(false)
   const [error,seterror]=useState()
   

useEffect(()=>{

},[])



let navigate=useNavigate()


const  handlesub= async(e)=>{
    e.preventDefault();
    try{
      
      var response= await axios.post("http://localhost:5000/Login/signup",{
        email,
        username,
        password,
      });
        
      console.log(response)
      
      if(response.data){
         
        console.log("account created")   
setsuc(true)   
        
  setTimeout(() => {
    navigate('/') 
    
  }, 3000);
      }
      
    }catch(err){
      console.log(err);
      seterror(err)
    }
    
    
  }





    return(
        <div className="row justify-content-center ">



      

        


     <div className="Login p-5 " >  

      <img  src="https://cdn4.vectorstock.com/i/1000x1000/88/93/simple-white-bike-rental-icon-vector-16758893.jpg "alt="" style={{width:"20%",marginRight:"30px"}}></img>

    <Form onSubmit={handlesub}  >
      <Row className="mb-3">
      <Col >
        <h4 className="Logh">SignUp</h4><br></br>

         {error && <Error error="Network error"></Error>}
        {suc && <Success success="Signup success"></Success>}

      <Form.Group  
                  md="4" controlId="formBasicEmail" >

        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"     onChange={e => setemail(e.target.value)}   />
      </Form.Group>
      
      <Form.Group  
                  md="4" controlId="formBasicEmail" >

        <Form.Label >Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"    onChange={e => setusername(e.target.value)}   />
      </Form.Group>
    
      <Form.Group className="sm-2" controlId="formBasicPassword">
        <Form.Label    >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" inputMode="Password"   onChange={e => setpassword(e.target.value)}       />
      </Form.Group>
     
      <a href="logIn" style={{textDecoration:"none",margin:"5px"}}>Alredy have an account? Login</a>
      </Col>
      <Button variant="primary" type="submit"   className="button">
       submit
      </Button>
      </Row>
    
     
      

    
          </Form>

        


    </div>
     </div>
     


    
          )
      }
