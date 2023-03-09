
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


function LogIn(){

    const [email,setemail]=useState("");

   const [password,setpassword]=useState("");
   
   const [loading,setloading]=useState(false);
   
   const [error,seterror]=useState();
   
   const [suc,setsuc]=useState("");
  
    const [token,settoken]=useState()
   
  //const[btnl,setbtnl]=useState(false)



useEffect(()=>{
  
},[])



let navigate=useNavigate()


const  handlesub= async(e)=>{
    e.preventDefault();
        

         try{
      var response= await axios.post("http://localhost:5000/Login/Login",{
        email,
        password
      });
        
      console.log(response.data)
      
   
   
      if(response){
         localStorage.setItem("token",response.data)
         localStorage.setItem('user',JSON.stringify(response.data))
         settoken(token)
          setsuc(true)
          setloading(true)
                     

          setTimeout(() => {
            navigate("/");
            
          }, 10000);
      }
       
      


    }catch(err){
      console.log(err)
      seterror(err)
    }
    
  }





    return(
    
   <div className="d-flex justify-content-center mt-4  img1" style={{backgroundColor:"black"}}>     
   <div className="m-5 " >
  <img src="https://cdn.profile.ru/wp-content/uploads/2021/07/Ducati-Panigale-V4.jpg" alt="" style={{width:"500px"}} className="img"></img>

   </div>
     <div className="Login">  

            

    <Form className="Loginform"  onSubmit={handlesub}  >
      <Row className="mb-3 align-items-center">
      <Col xs="auto" >
        <h4 className="Logh">Welcome....!</h4><br></br>
         {error && <Error  error='Invalid Credentials'></Error>}
         {suc && <Success  success="Login successful"></Success>}

      <Form.Group  
                  md="4" controlId="formBasicEmail" >

        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"    onChange={e => setemail(e.target.value)}  required />
      </Form.Group>
      
     
    
      <Form.Group className="sm-2" controlId="formBasicPassword" style={{marginTop:"5px",marginBottom:"5px"}}>
        <Form.Label    >Password</Form.Label>
        <Form.Control type="password" placeholder="Password"    onChange={e => setpassword(e.target.value)} required      />
      </Form.Group>
      </Col>
      <Row>
       {loading?<Loading></Loading> :""}
      <Button type="submit" size="sm"   variant="primary" >
         
         Login
      
      </Button>
       </Row>
      <a href="/forgot"  style={{textDecoration:"none",marginTop:"20px"}}>Forgot Password?</a>
      </Row>
      <a href="/signup"  style={{textDecoration:"none"}}>Dont  have  an account yet?    Signup</a>
        
          </Form>

    </div>
     
  </div>

  
          )
      }

export default LogIn;
