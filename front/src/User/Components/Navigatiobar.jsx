import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../main';
import CartCanvas from './CartCanvas';
// import { BiSolidContact } from 'react-icons/Bi'

function NavigatioBar() {
  const {contextData} = useContext(GlobalContext)

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" data-aos="from-top">
        <Container>
          <Link className='nav-link text-white' to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Dream Cart</Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
       
              <Link className='nav-link' to="/">Home</Link>
              <Link to ='Admin' className='nav-link'>Admin</Link>
              <Link className='nav-link' to="/Products">Products</Link>
              <Link className='nav-link' to="/Categories">Categories</Link>
              < Link className='nav-link text-white' to='Login'>Login</Link>
              <Link className='nav-link text-white btn btn light' to='SignUp'>SignUp</Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  );
}

export default NavigatioBar;
