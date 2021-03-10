import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import doglogo from '../images/homepage-logo.png';
import '../stylesheets/Homepage.css';

const Homepage = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="jumbotron jumbotron-fluid">
            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-6">
                  <h1 className="display-8">The Pet Shop</h1>
                  <p className="lead">Beautiful Dogs for sale!</p>
                  <button className="btn btn-outline-primary shop-btn">
                    <Link to="/shop">Shop</Link>
                  </button>
                </div>
                <div className="col-6">
                  <img src={doglogo} width="150" height="150" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
