import React from 'react'
import {Admin,Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest';
import { Bikes } from './Bikes';
import bikedata from './bikedata';


 function Admindash(){

    
    
    return(

          <Admin dataProvider={restProvider('http://locahost:3000')} >

              <Resource  name='bikes' list={bikedata} ></Resource>
          </Admin>






        /*
        <div>
          <h3 className="header">Admin Page</h3>


         <form>
             
         </form>
        </div>
              */   
        )
}

export default Admindash;