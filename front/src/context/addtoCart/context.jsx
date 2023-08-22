import React, { createContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import Cookies from "js-cookie";


export const CartContext = createContext();

 
const getCartData = () => {
  const cartData = localStorage.getItem('cart');
 if(cartData == "null" || "undefined"){
  return []
 }
 else{
  return JSON.parse(cartData)
 }
};

const initialData = {
  cart: [getCartData()],
};


export default function CartContextProvider({ children }) {
  const [cart_state, cart_dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart_state.cart));
  }, [cart_state.cart.token]);

  return (
    <CartContext.Provider value={{ cart_state, cart_dispatch }}>
      {children}
    </CartContext.Provider>
  );
}   