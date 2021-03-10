import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData';
import '../stylesheets/CartItem.css';

const CartItem = (props) => {
  return (
    <div className="cart-item">
      {ShopData[props.id].breed}
      <span
        className="add-count"
        onClick={() => {
          props.addToCart(props.id);
        }}
      >
        +
      </span>
      {ShopData[props.id].count}
      <span
        className="remove-count"
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
