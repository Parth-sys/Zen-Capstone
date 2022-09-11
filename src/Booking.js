import React, { useState }  from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { HashRouter, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Booking({data}){

    const [Start, onChange] = useState("10:00");


    const [Selectdate,setSelectdate]=useState(new Date())
    const [Enddate,setEnddate]=useState(new Date());
    const [hr,sethr]=useState("hours");
    const [month,setmonth]=useState("month")

    const {name} =useParams()







   console.log(data)
    return(

      < div className="container">
        <div className="row  mt-2 m-1 p-1 booking">
          
        

      
            {data.filter(n=>n.name==name).map((s,index)=>(
              
              <div className="col-md-8"  style={{backgroundColor:"black",color:""}}  key={index}>
        
                <div className='d-flex justify-content-center'>
        
              <div className='m-3'>
              <Card className="bikecard" style={{ width: '28rem'  }} >
        <Card.Img variant="top" src={s.image} />
        <Card.Body>
          <Card.Title style={{color:"black"}}>{s.name}</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>
         
         
          </div>
              
         
         

      
       
              <div className='wd-100 p-2 m-1' style={{backgroundColor:"deepskyblue"}}>
                 
             <lable>Username</lable><br/>
             <input type="text" className='form-control'  required></input><br/>
             
             <label>email</label><br/>
             <input type="email" className='form-control' required></input><br/>
             
             <label>Bike Name</label><br/>
        <input type="text" className='form-control' required value={s.name}></input><br/>
 
    
        <select>
         <option  value={hr} >Hours/Daily</option>  
          
        <option  value={month} >30 Days</option>
        <label>Price</label><br/>
        </select><br/>
        
        




        <label>Start time</label><br/>
        <TimePicker
        onChange={onChange}
        value={Start}
        /><br/>

       <label>endt time</label><br/>
        <TimePicker
           onChange={onChange}
          value={Start}
          /><br/>
          
          <lable>city</lable><br/>
          <input type="text" className='form-control'></input><br/>

          <label>Start Date</label><br/>
          <DatePicker selected={Selectdate}
          onChange={(date) => setSelectdate(date)}
          required
     
          selectsStart
          startDate={Selectdate}
          minDate={new Date()}
          dateFormat='dd/MM/yyyy'
          endDate={Enddate}
          
          /><br/>
          
          <lable>End Date</lable><br/>
          <DatePicker selected={Enddate}
          
          onChange={(date) => setEnddate(date)}
          required
          dateFormat='dd/MM/yyyy'
          isClearable
          minDate={new Date()}
          /><br/>
          
          <input type="submit" className=' btn-primary' value="Ride Now"></input>
          
          </div>
      </div>
       
      </div>
       ))
       
      }
        
      </div>
      
          
      
      </div>  
   
    )
}
export default Booking;