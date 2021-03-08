import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData.js';
import ShopItem from './ShopItem.js';
import '../stylesheets/Shop.css';

const Shop = (props) => {
  let shopItems = ShopData;
  //Need to create state that has cartItems
  //Then when we add something to cart we add that item here.
  //Navbar needs to be rendered in each different component.s
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around container-fluid">
        {shopItems.map((itemObj, i) => {
          return (
            <div key={i}>
              <ShopItem
                incrementCount={props.incrementCount}
                itemObj={itemObj}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
