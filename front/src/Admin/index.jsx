import React from 'react'
import SideBar from './Components/SideBar'
import {Link, Route, Routes,} from "react-router-dom";
import Home from '../pages/Home'
import Order from './Pages/Order'
import AddProduct from './Pages/AddProduct'
import AddCategory from './Pages/AddCategory';

function index() {
  return (
    <div className="row m-0 p-0">
      <div className="col-md-4 bg-dark" style={{ height: '100vh'}}>
        <SideBar/>
      </div>
      <div className="col-md-8">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      </div>
    </div>
  )
}

export default index