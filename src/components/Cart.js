import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData';
import '../stylesheets/Cart.css';

const Cart = (props) => {
  let subTotal = 0;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          {props.cartItems.map((cartItem, i) => {
            return (
              <div key={i}>
                <div>{ShopData[i].breed}</div>
              </div>
            );
          })}
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Cart;
