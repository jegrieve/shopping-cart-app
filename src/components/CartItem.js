import React, { useState, useEffect } from 'react';
import ShopData from '../data/ShopData';
import '../stylesheets/CartItem.css';

const CartItem = (props) => {
  return (
    <div>
      {ShopData[props.id].breed} x {ShopData[props.id].count}
    </div>
  );
};

export default CartItem;
