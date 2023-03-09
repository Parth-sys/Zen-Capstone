import React ,{useState,useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import { Alert } from "bootstrap";
import Loading from './Loding';
import Error from "./Error";
import Success from "./Success";


function ForgotPass(){

    const [email,setemail]=useState("");
   const [loading,setloading]=useState(false);
   const [error,seterror]=useState();
   const [suc,setsuc]=useState();
  
  const [token,settoken]=useState()
    
useEffect(()=>{
  
},[])



let navigate=useNavigate()


const  handlesub= async(e)=>{
    e.preventDefault();
        
         try{
      var response= await axios.post("http://localhost:5000/Login/Login",{
        email,
       
      });
        
      console.log(response.data)
      
      if(response){
         localStorage.setItem("token",response.data)
         settoken(token)
         setsuc(true)
         navigate("/");
        }
        Alert("Login Successfully");
        
        

    }catch(err){
      console.log(err)
      seterror(err)
    }
    
  }



  console.log(token)


    return(
        
     <div className="Forgot container">  

      

    <Form onSubmit={handlesub}  >
      <Row className="mb-3 " >
      <Col >
        <h4 className="Logh">Registerd Email</h4><br></br>
         {loading && <Loading></Loading>}
         {error && <Error  error='Invalid Credentials'></Error>}
         {suc && <Success  success="Login successful"></Success>}

      <Form.Group  
                  md="4" controlId="formBasicEmail" >

        <Form.Label  style={{marginLeft:"10px"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter ur registerd Email"    onChange={e => setemail(e.target.value)}   />
      </Form.Group>
      </Col>
      <Button variant="primary" type="submit" size="sm" className="btn-primary mt-2 ">
        Submit
      </Button>
       </Row>
          </Form>

    </div>
     


    
          )
      }

export default ForgotPass;