
import React,{useState,useEffect} from 'react'
import Error from './Error';
import Loading from './Loding';
import {useNavigate} from  'react-router-dom';


function Price({bike}){

    //console.log(bike)

    const [varient, setvarient] = useState('Hour');
    const [quantity, setquantity] = useState(1);
    

   const navigate=useNavigate();

    return(
        <div className=" shadow-lg p-2 mb-5 bg-body rounded m-5"    >
            
             
              <div  >
            <h4>{bike.name}</h4>
            <img src={bike.image} alt="name" className="img-fluid" style={{ height: '200px', width: '200px' }}></img>
              </div>

            <div className="d-flex">

                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => setvarient(e.target.value)} >
                        {bike.varients.map((option) => {
                            return <option value={option}>{option}</option>
                        })}
                    </select>

                </div>

              

                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => setquantity(e.target.value)}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>  
                        })}
                    </select>
                </div>


            </div>

            <div className="d-flex">

                <div className="m-1 w-100">

                    <h4> Price:{bike.Prices[0][varient] * quantity}Rs/- </h4>
                </div>

                <div className="m-1 w-100">
                    <button className=" btn-danger" onClick={()=>navigate(`/Booking/${bike.name}`)} >Book</button>
                </div>


            </div>

         </div>
         
        
        
     

    )
}
export default Price;