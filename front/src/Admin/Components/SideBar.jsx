import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideBar() {

  const location = useLocation()

  const NavItems = [
    {
      tab : "Home",
      url : "/"
    },
    {
      tab : "Order",
      url : "/order"
    },
    {
      tab : "AddProduct",
      url : "/addproduct"
    },
    {
      tab : "AddCategory",
      url : "/addcategory"
    }
  ]


  return (
   <>
   <div className=' p-3 d-flex text-black justify-content-between align-items-center' style={{ backgroundColor: 'yellow'}}>
    <span>Admin Name</span>
    <button className='btn btn-outline-black'>Logout</button>
   </div>

   
   <ul className="nav flex-column pt-3">
  {
    NavItems.map ((val, key) => 
    <li key={key} className={`nav-item m-2 ${location.pathname == val.url ? 'text-black bg-white rounded' : null}`}>
    <Link className = 'nav-link d-flex align-items-center gap-2' to = {val.url}>
      
      <span>{val.tab}</span>
      </Link>
  </li>
  )
  }
</ul>
   </>
  )

}

export default SideBar