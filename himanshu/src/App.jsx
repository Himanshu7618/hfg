import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Footer from "./components/Footer"
import Category from "./Pages/Category"
function App () {
  const[cart, setCart]= useState([])
  return (
 <>
  <Navbar cartCount={cart.length}/>
  <Routes>
    <Route path="/" element={<Home cart={cart} setCart={setCart} />}/>
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/category/:name" element={<Category />} />
  </Routes>
  <Footer />
 </>

  );
};

export default App;

