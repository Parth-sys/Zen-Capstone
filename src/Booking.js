import React, { useState,useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { HashRouter, useParams ,useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Payment from './Payment';
import { useRef } from 'react';

function Booking({ data }) {

  const [Start, onChange] = useState("10:00");



  const [Selectdate, setSelectdate] = useState(new Date())
  const [Enddate, setEnddate] = useState(new Date());
  const[select,setselect]=useState()

  const [total,settotal]=useState()

  const [email,setemail]=useState("")



const price=useRef(0)


  const { name } = useParams()

 
 var bikename=name;
 console.log(bikename)
 
  const navigate=useNavigate()


useEffect(()=>{

  if(!localStorage.getItem('token')){

    navigate('/login')
  }

},[])




const difference=Selectdate-Enddate;
console.log(difference)



const handleprice=(e)=>{

  var value=e.target.value;
  setselect(value)

  var price;
  var price2;
data.filter(n=>n.name ===name).map((v,i)=>{
   price=v.price;
   price2=v.price2;
})

console.log(price,price2)

 

  if(select == "hr"){
    settotal(price)
  }
  
 else if(select == "month"){
  
    settotal(price2)
  
  }
 


}



    
  return (

    < div className="container" >


      <div className="row  mt-2 m-1 p-1  justify-content-center booking" >




        {data.filter(n => n.name == name).map((s, index) => (
           

          <div className="col-md-8" style={{ backgroundColor: "white" }} key={index}>

            <div className='d-flex justify-content- center flex-wrap'>

              <div className='m-3'>
                <Card className="bikecard" style={{ width: '25rem' }} >
                  <Card.Img variant="top" src={s.image} />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>{s.name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>


              </div>






              <div className='wd-100 p-1 m-1 ' style={{ backgroundColor: "ghostwhite" }}>


                <lable>Drop Point</lable><br />
                <input type="text" className='form-control' placeholder='Address'  required></input><br />

                <label>email</label><br />
                <input type="email" className='form-control' placeholder='email' required value={email} onChange={e=>setemail(e.target.value)}></input><br />

                <label>Bike Name</label><br />
                <input type="text" className='form-control' required value={s.name}></input><br />


                <select  className='form-select' onChange={e=>handleprice(e)}  >
                
                  <option value="hr" >Hours/Daily</option>

                  <option value="month" >30 Days</option>
                </select><br />

                  <label>Price</label><br/>
                  <h4   type="text"    className='form-control' >{total}. Rs/-</h4><br/>
              
                {/*
                <label>Start time</label><br />
                <input type="time" id="appt" name="appt"
                  min="09:00" max="18:00" required /><br/>""

                <label>End time</label><br />
                <input type="time" id="appt" name="appt"
                  min="09:00" max="18:00" required /><br/>

        <TimePicker
        onChange={onChange}
        value={Start}
        /><br/>

       <label>endt time</label><br/>
        <TimePicker
           onChange={onChange}
          value={Start}
          /><br/>
            */}
                <lable>city</lable><br />
                <input type="text" className='form-control'></input><br />

                <label>Start Date</label><br />
                <DatePicker selected={Selectdate}
                  onChange={(date) => setSelectdate(date)}
                  required

                  selectsStart
                  startDate={Selectdate}
                  minDate={new Date()}
                  dateFormat='dd/MM/yyyy'
                  endDate={Enddate}

                /><br />

                <lable>End Date</lable><br />
                <DatePicker selected={Enddate}

                  onChange={(date) => setEnddate(date)}
                  required
                  dateFormat='dd/MM/yyyy'
                  isClearable
                  minDate={new Date()}
                /><br />

                <Payment bikename={bikename} email={email} total={total}></Payment>

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