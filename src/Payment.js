import React from 'react'
import useRazorpay from "react-razorpay";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Payment(props){

console.log(props)
const navigate=useNavigate()


const Razorpay=useRazorpay()

 




 




    const handlePayment = async () => {
     var total =props.total
     var bike=props.bikename
     var email=props.email
     
     
        const order = await axios.post("http://localhost:5000/pay/orders",{
         total,
         bike,
         email
        } ); //  Create order on your backend
      
             var data=order.data

             const options={
              key:"rzp_test_gD5V2gMIQb5JMo",
              amount:data.amount,
              order_id:data.id,
              currency:data.currency,
              name:props.email,
              bikename:props.bikename,
                handler:async(response)=>{
                  try{
                    const bookingdata={
                      total,
                      bike,
                      email
                    }
                    const verifyurl="http://localhost:5000/pay/verify"
                      const d=await axios.post(verifyurl, response+bookingdata,)
                      console.log(d)
            
                  
                      if(d.status==200){
                        navigate('/orders')
                      }


                  }
                  catch(err){
                   console.log(err)
                  }
                },
          
                prefill: {
                  name: props.email,
                  contact: "9999999999",
                 
                },
                notes: {
                  address: "Razorpay Corporate Office",
                },
                theme: {
                  color: "#5181f0",
                },
           
          
          
            }
          
          
            const rzp1 = new Razorpay(options);
          
            rzp1.open();   
          
          
    }
          
          









    




    
    
      return (
        <div className="butt m-1 p-1">
          <button onClick={handlePayment}>Pay</button>
        </div>
      );
    }


export default Payment





  