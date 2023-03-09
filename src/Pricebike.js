import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loading from './Loding';
import Error from './Error';
import Price from './Price';
import { FaClosedCaptioning } from 'react-icons/fa';

function Pricebike() {

      const [bike, setbike] = useState([]);
      const [loading, setloading] = useState(false);
      const [error, seterror] = useState("")
      const [Category, setCategory] = useState();
    

      useEffect(() =>{
          bikes();
      },[])


      const bikes= async()=>{
           
            setloading(true)
            try {
                 var result=await axios.get("http://localhost:5000/bikes")
                  var data=result.data;
                  console.log(data)
                  setbike(data)
                  setloading(false)
                   



            } catch (error) {
                  console.log(error)
            }
      }










      return (

            <div className="row justify-content-center">

                  <div style={{ maarginTop: "30px", width: "71%" }}>
                        <select name="select" className='form-select ' onChange={(e) => setCategory(e.target.value)} >

                              <option value="Urban">Urban</option>
                              <option value="Sport">Sport</option>
                              <option value="Adventure">Adventure</option>
                        </select>
                  </div>







                  {loading && <Loading></Loading>}
                  {error && <Error error="Error in Loading"></Error>}

                  {




                        bike.filter(data=>data.Category == Category).map((p) => {
                                    {console.log(p)}
                              return <div className="col-md-4 " >

                                    <div style={{ margin: "10px" }}>
                                        <Price bike={p}></Price>
                                    </div>
                              </div>
                        })


                  }


            </div>


      )

}


export default Pricebike;