import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData.js';
import ShopItem from './ShopItem.js';
import '../stylesheets/Shop.css';

const Shop = (props) => {
  let shopItems = ShopData;
  //Need to create state that has cartItems
  //Then when we add something to cart we add that item here.
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around container-fluid">
        {shopItems.map((itemObj, i) => {
          return (
            <div key={i}>
              <ShopItem
                incrementCount={props.incrementCount}
                id={i}
                itemObj={itemObj}
                addToCart={props.addToCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
