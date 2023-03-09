
import './App.css';
import Hero from './Hero';
import {  useEffect, useState, useMemo } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom'
import Fullcard from './Fullcard'
import HomePage from './HomePage';
import LogIn from './Login';
import ForgotPass from './ForgotPass';
import { SignUp } from './SignUp';
import { Bikedeatails } from './Bikedeatails';
import Booking from './Booking';
import Contact from './Contactus';
//import Price from './Price'
import Admindash from './Admin';
import Pricebike from './Pricebike';
import Orders from './Orders';
function App() {







  useEffect(() => {

    async function Fetchdata() {
      var response = await axios.get("http://localhost:5000/bikes")
      console.log(response.data);

      setdata(response.data)
    }
    Fetchdata()

  }, [])

  const [data, setdata] = useState([]);
  const [theme, settheme] = useState('light')


  // console.log(d)

  const Themecontext = createContext(null)

  const Toggle = () => {
    settheme((curr) => (curr === "light" ? "dark" : "light"))
  }




  return (
    <Themecontext.Provider value={{ theme, Toggle }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage  ></HomePage>} ></Route>
          <Route path="/Card" element={<Hero data={data}></Hero>}></Route>
          <Route path="/card/:name" element={<Fullcard data={data} ></Fullcard>}></Route>

          <Route path="/:Category" element={<Pricebike></Pricebike>} ></Route>

          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/Price" element={<Pricebike></Pricebike>}></Route>
           <Route path="/orders" element={<Orders></Orders>}></Route>
          <Route path="/LogIn" element={<LogIn></LogIn>}></Route>

          <Route path="/Bikedeatails/:name" element={<Bikedeatails data={data}></Bikedeatails>}></Route>

          <Route path="/Booking/:name" element={<Booking data={data}></Booking>} />


          <Route path="/Signup" element={<SignUp></SignUp>}></Route>



          <Route exact path='/forgot' element={<ForgotPass></ForgotPass>} ></Route>
          <Route path="/Contactus" element={<Contact></Contact>}></Route>
          <Route exact path="/Admin " element={<Admindash></Admindash>}></Route>

        </Routes>



      </BrowserRouter>
    </Themecontext.Provider>
  );
}

export default App
