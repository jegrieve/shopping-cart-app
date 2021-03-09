import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData';
import CartItem from './CartItem';
import '../stylesheets/Cart.css';

const Cart = (props) => {
  let subTotal = 0;
  let uniqueItems = [...new Set(props.cartItems)];

  const getItemCounts = (cartItems) => {
    cartItems.forEach((id) => {
      if (!ShopData[id].count) {
        ShopData[id].count = 1;
      } else {
        ShopData[id].count += 1;
      }
    });
  };
  getItemCounts(props.cartItems);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          {uniqueItems.map((id, i) => {
            return (
              <div key={i}>
                <CartItem id={id} />
              </div>
            );
          })}
        </div>
        <div className="col-6">
          {uniqueItems.map((id, i) => {
            subTotal += Number(ShopData[id].price) * ShopData[id].count;
            return (
              <div key={i}>
                ${Number(ShopData[id].price) * ShopData[id].count}
              </div>
            );
          })}
          <div>Subtotal: {subTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
//what i will do next
//display each item
//each item should only display once with count next
//to it.
//then we can increment or decrement (to 0) the count
//also display total prices next to items
//display subtotal
//finally do homepage then done
//going to go through the array and count
//each time one of the items is in the array
//then i will set the data.count on that itemdataobj
//then pass that into the array and u can change it?
//have to do this from the top(same increment, add decrement)
