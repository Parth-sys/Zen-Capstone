
import React from 'react';
import Button from 'react-bootstrap/Button'
//import { ButtonGroup } from 'semantic-ui-react';

function Contact(){
    return(
        
        <div className="row  justify-content-center  m-1 " style={{height:"100%",backgroundColor:"skyblue"}}>
            <div className='d-flex w-100 mt-5 justify-content-center ' >
               <div className='m-1 con '  > 
                
                  <div  className="cont"  style={{border:"1px solid transparent",padding:20}}>
                 <h2>Contact us</h2>
                 <text> Fill up the form to contact</text>
                 <p>+91 9503339357</p>
                 <text className='text'>9156parth@gmail.com</text>
                 </div>
                
                <div className='contact'>
                <form className="form">
                  <label>Your Name</label>
                  <input type="name" className='form-control' required ></input>

                  <label>Your email</label>
                  <input type="email" className='form-control' required ></input>

                  <label>Message</label>
                  <textarea type="text" className='form-control' required ></textarea>

                    <button className='btn-primary m-1 p-1' >submit</button>                  
                </form>

            </div>
                </div>
                </div>    
        </div>
      
    )
}
export default Contact;