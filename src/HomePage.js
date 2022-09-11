import React,{useState,useEffect} from "react";
import {FaBiking} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { BikeCarousal } from "./BikeCarousal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Bikes } from "./Bikes";
import Loading from "./Loding";
import settoken from './Login';
import Footer from './Footer'
import {createContext} from 'react';


function HomePage() {

useEffect(()=>{
  ridenow()
  Check();
},[])


  //const d=new Date();
   //const d1=d.toDateString()
      //console.log(d1)

 const Themecontext=createContext(null)

      
      const [Selectdate,setSelectdate]=useState(new Date())
      const [Enddate,setEnddate]=useState(new Date());
      const [value, onChange] = useState("10:00");
      const [bikes,setbikes]=useState([]);
      const[isLogIN,setisLogIN]=useState(false);

      const [Loading,setLoading]=useState(false);

       const [theme,settheme]=useState('dark')



      const ridenow=async()=>{

        try {
          var response=await axios.get('http://localhost:5000/bikes')
          var data=response.data;
          console.log(data);
          setbikes(data)
          setLoading(false)
         
        } catch (error) {
          console.log(error)
              
        }
      }
      
      
      console.log(bikes)
      let navigate=useNavigate();


      
      
      const Logout = () => {
        
        
        
        if (settoken) {
          localStorage.clear("token");
          
          navigate('/Login')
        }
        else {
          alert("Please LogIn")
        }
      }
      

const Check=()=>{
  var token=localStorage.getItem("token")

  
  if(token){
    setisLogIN(true);
  }
  else{
    setisLogIN(false)
  }
}
console.log(isLogIN)




const Toggle=()=>{
  settheme((curr)=>(curr=="light"?"dark":"light"))
}








    return(
       
      <Themecontext.Provider value={{theme,Toggle}}>
      <div className="row  justify-content-center mt-1" id={theme}>
    <div className="co-md-8">
    

    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
  <Container>
    <FaBiking ></FaBiking>
  <Navbar.Brand href="#home">Bike Rental</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">
      <Nav.Link onClick={()=>navigate('/home')}>Home</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>

     {isLogIN?
     <Nav.Link onClick={Logout}>Logout</Nav.Link>
   
     :
     <Nav.Link  onClick={()=>navigate('/LogIn')}  >LOGIN</Nav.Link>
    }
    <button onClick={()=>navigate('/Signup')}   >SignUp</button>
  
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Contactus">contact us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      





    </Nav>
    
    
  </Navbar.Collapse>
  </Container>
</Navbar>


     <div className="w-100 m-1">

     <BikeCarousal />

     </div>
     <h3 className="booktext">Book your ride Now</h3>

    <div className="wd-100">
    {Loading && <Loading></Loading>}


     <Bikes></Bikes>
      </div>
  </div>
   <Footer></Footer>
    </div>
    </Themecontext.Provider>
 
    )
}

export default HomePage;





