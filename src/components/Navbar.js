import React, { useState, useEffect } from 'react';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="shop">
        Shop
      </a>
      <a className="navbar-brand" href="cart">
        Cart
      </a>
    </nav>
  );
};

export default Navbar;
