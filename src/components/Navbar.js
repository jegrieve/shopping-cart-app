import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <Link to="/shop" className="navbar-brand">
        Shop
      </Link>
      <Link to="/cart" className="navbar-brand">
        <span className="cart-count">({props.count}) </span>
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;
