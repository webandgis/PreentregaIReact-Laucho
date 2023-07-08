import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Item from '../pages/Item'
import NavBar from '../components/NavBar'
import Cart from '../pages/Cart'
import { CheckOut } from '../pages/CheckOut'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import CartProvider from '../context/CartContext'
import Title from '../components/Title'

const MainRouter = () => {
    return (
    
      <Router>
         <CartProvider>
      <NavBar />
    <Title/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categoria/:categoriaId" element={<Category />} />
          <Route exact path="/item/:itemId" element={<Item />} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/checkout" element={<CheckOut/>}  />
          

        </Routes>
        </CartProvider>
        <Footer/>

      </Router>
    
    );
  };
  
  export default MainRouter;