import userEvent from '@testing-library/user-event';
import React from 'react';
 import { useState,useEffect} from 'react';
import axios from 'axios';

function Orders(){

    const [orders,setorders]=useState([]);
   
    useEffect(()=>{

        const data=async()=>{
         
            var user=localStorage.getItem("user")
            var data=JSON.parse(user)
            var email=data.user.email;
            console.log(email)
            var res= await axios.post('http://localhost:5000/orders/OrderH',{email})
           console.log(res.data)
            setorders(res.data)
            
       }
   data()

    },[])
    
    return (
        <div>
            <h4> Orders </h4>
        </div>
    )

    }
    export default Orders