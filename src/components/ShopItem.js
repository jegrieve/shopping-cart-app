import React, { useState, useEffect } from 'react';
import '../stylesheets/Shop.css';

const ShopItem = (props) => {
  return (
    <div>
      <img src={props.itemObj.img} height="250" width="250"></img>
    </div>
  );
};

export default ShopItem;
