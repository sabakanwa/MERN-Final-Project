import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/addtoCart/context';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import ItemCards from './ItemCards';
import { BsCreditCard2BackFill } from 'react-icons/bs';

export default function CartCanvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cart_state, cart_dispatch } = useContext(CartContext);

  const handleClearCart = () => {
    cart_dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <BsCreditCard2BackFill size={30} />{" "}
        <Badge bg="secondary">{cart_state.cart?.length}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {cart_state.cart?.map((val, key) => <ItemCards key={key} data={val} />)}
          </div>
          <button
            className='ms-4 btn btn-outline-dark'
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

