import './App.css';
/*import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from './Header'
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import 'semantic-ui-css/semantic.min.css';
import bgImage from'../resources/g.jpg';
function App() {
  return (
    <div className="App"  style={{backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",}}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/signup"} element={<SignUp/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/home"} element={<Home/>}></Route>
                <Route path={"/"} element={<Navigate to={"/signup"}/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter  , Routes, Route, } from "react-router-dom";
import HomePages from "./HomePages";
import "semantic-ui-css/semantic.min.css"; 
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/" } element={<HomePages/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;*/

import React, { useState } from 'react';
import Navbars from '../component/Navbars/Navbars';
import { Route, Routes } from 'react-router-dom';
//import Homes from './pages/Homes/Homes'
import PlaceOrder from '../pages/PlaceOrder/PlaceOrder';
import Footer from '../component/Footer/Footer';
import LoginPopup from '../component/LoginPopup/LoginPopup';
import Cart from '../pages/Cart/Cart';
import Homes from '../pages/Homes/Homes';

const App = () => {

const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
       <div className='app'>
      <Navbars setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Homes/>} />
        {/* <Route path='cart' element={<Cart/> } /> */}
        <Route path='cart' element={<Cart/>} />
        <Route path='order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
 
  )
}

export default App;
