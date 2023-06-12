import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Item from '../pages/Item'
import NavBar from '../components/NavBar'
import {Link} from 'react-router-dom'

const MainRouter = () => {
    return (
      <Router>
      <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categoria/:categoriaId" element={<Category />} />
          <Route exact path="/item/:itemId" element={<Item />} />
        </Routes>
      </Router>
    );
  };
  
  export default MainRouter;