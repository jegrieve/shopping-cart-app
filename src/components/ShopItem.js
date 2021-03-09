import React, { useState, useEffect } from 'react';
import '../stylesheets/Shop.css';

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <img src={props.itemObj.img} height="250" width="250"></img>
      <div className="shop-item-info">
        <div className="item-breed">{props.itemObj.breed}</div>
        <div className="item-price d-flex justify-content-around">
          <span className="item-price">${props.itemObj.price}</span>
          <button
            onClick={() => {
              props.incrementCount();
              props.addToCart(props.id);
            }}
            className="btn btn-outline-success"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
