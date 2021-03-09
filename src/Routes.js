import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCart = (id) => {
    setCartItems((cart) => [...cart, id]);
  }; //we are gonna pass this down to each item on the button onclicks.

  //So heres the plan:
  //Click on a add to cart button, then on the shopitem button, goes up to parent using a set, which goes up to routes using set
  //The route set then adds that item to the cart
  //The cart then has the number incremented next to cart (Ex:   Cart (1))
  //Then everything rerenders
  //So i think if we pass down a prop (setEtc) from routes.js it can then update the whole app again.
  return (
    <BrowserRouter>
      <Navbar count={count} /> {/* cartItems={cartItems} */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/shop"
          render={(props) => (
            <Shop
              {...props}
              incrementCount={incrementCount}
              addToCart={addToCart}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={(props) => <Cart {...props} cartItems={cartItems} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

// render={(props) => <Home {...props} yourProp = {yourProp} />}

export default Routes;
