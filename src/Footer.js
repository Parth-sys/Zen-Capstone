
import React from 'react';
import {FaFacebook,FaInstagramSquare,FaGoogle,FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'
function Footer(){ 
    return(
        
        <div className="row justify-content-center m-1">
<footer className="text-center text-lg-start bg-white text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
 
  
    <div>
      <a href="" className="me-4 link-grayish">
        <FaFacebook/>
      </a>
      <a href="" className="me-4 link-grayish">
        <FaInstagramSquare></FaInstagramSquare>
      </a>
      <a href="" className="me-4 link-grayish">
       <FaGoogle></FaGoogle>
      </a>
      <a href="" className="me-4 link-grayish">
      <FaTwitter></FaTwitter>
      </a>
      <a href="" className="me-4 link-grayish">
       <FaLinkedin></FaLinkedin>
      </a>
      <a href="" className="me-4 link-grayish">
       <FaGithub></FaGithub>
      </a>
    </div>
  
  </section>
  

  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">
 
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-grayish"></i>Bike rental
          </h6>
          <p>
             Here you can  book ur ride and  go for riding.
             There are Motorcycles available on the rent basis.
             so enjoy ur ride...
          </p>
        </div>
  

      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset bordernone">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset bordernone" >React</a>
          </p>
          <p>
            <a href="#!" className="text-reset bordernone">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset bordernone">Laravel</a>
          </p>
        </div>
      

       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset bordernone">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset bordernone">Bikes</a>
          </p>
          <p>
            <a href="#!" className="text-reset bordernone">bookings</a>
          </p>
          <p>
            <a href="#!" className="text-reset bordernone">Help</a>
          </p>
        </div>
        

      
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-grayish"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-grayish"></i>
            Bikerental@bike.com
          </p>
          <p><i className="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-grayish"></i> + 01 234 567 89</p>
        </div>
    
      </div>
    
    </div>
  </section>
  

  
  <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.025)"}}>
    © 2022 Copyright:
    <a className="text-reset fw-bold" href="/">Bikerental.com</a>
  </div>

</footer>
</div>

    )
}
export default Footer;