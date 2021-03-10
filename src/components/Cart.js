import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData';
import CartItem from './CartItem';
import '../stylesheets/Cart.css';

const Cart = (props) => {
  ShopData.forEach((item) => {
    item.count = 0;
  });
  let subTotal = 0;
  let uniqueItems = [...new Set(props.cartItems)];

  const getItemCounts = (cartItems) => {
    cartItems.forEach((id) => {
      ShopData[id].count += 1;
    });
  };

  getItemCounts(props.cartItems);

  return (
    <div className="container-fluid">
      {props.count > 0 ? (
        <div className="row">
          <div className="col-6">
            {uniqueItems.map((id, i) => {
              return (
                <div key={i}>
                  <CartItem
                    id={id}
                    count={props.count}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                  />
                </div>
              );
            })}
          </div>
          <div className="col-6">
            {uniqueItems.map((id, i) => {
              subTotal += Number(ShopData[id].price) * ShopData[id].count;
              return (
                <div className="item-prices" key={i}>
                  ${Number(ShopData[id].price) * ShopData[id].count}
                </div>
              );
            })}
            <hr></hr>
            <div className="subtotal-price">Subtotal: ${subTotal}</div>
          </div>
        </div>
      ) : (
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Your cart is currently empty.</h1>
            <p class="lead">Please buy something :)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
