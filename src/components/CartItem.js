import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData';
import '../stylesheets/CartItem.css';

const CartItem = (props) => {
  return (
    <div>
      {ShopData[props.id].breed} x{' '}
      <span
        onClick={() => {
          props.addToCart(props.id); //these are the problems. they both trigger the rerenders...
        }}
      >
        +
      </span>
      {ShopData[props.id].count}
      <span
        onClick={() => {
          props.removeFromCart(props.id);
        }}
      >
        -
      </span>
    </div>
  );
};

export default CartItem;
// onClick={() => {
//     props.incrementCount();
//     props.addToCart(props.id);
//   }}

// const incrementCount = () => {
//     setCount(count + 1);
//   };
//   const decrementCount = (count) => {
//     if (count >= 0) {
//       setCount(count - 1);
//     }
//   };

//   const addToCart = (id) => {
//     setCartItems((cart) => [...cart, id]);
//   }; //we are gonna pass this down to each item on the button onclicks.

//   const removeFromCart = (id) => {
//     setCartItems((cart) => {
//       let index = Array.indexOf(id);
//       cart.splice(index, 1);
//       return cart;
//     });
//   };
