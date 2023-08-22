import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../context/addtoCart/context';
import { GlobalContext } from '../../main';
import { decodeToken } from 'react-jwt';


function ItemCards({ data }) {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const { state , dispatch } = useContext(GlobalContext);

  // Decode the token here
  const user = decodeToken(state?.token);  // Make sure state?.token is the correct token

  const checkout = () => {
    const payload = {
      items: cart_state.cart,
      totalBill: total,
      customerAddress: "hello 123 Street ABC",
      customerContact: "0900 78601",
      customerName: user?.username, // Access username from decoded token
      customerEmail: user?.email,   // Access email from decoded token
    };
    console.log(payload);
  }

  return (
    <Card>
      {/* ... */}
      <div className="container mt-3">
        <button className="d-block w-100 btn btn-light" onClick={checkout}>
          CheckOut
        </button>
      </div>
    </Card>
  );
}

export default ItemCards;