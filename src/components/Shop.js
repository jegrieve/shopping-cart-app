import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData.js';
import ShopItem from './ShopItem.js';
import '../stylesheets/Shop.css';

const Shop = (props) => {
  let shopItems = ShopData;

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around container-fluid">
        {shopItems.map((itemObj, i) => {
          return (
            <div key={i}>
              <ShopItem id={i} itemObj={itemObj} addToCart={props.addToCart} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
