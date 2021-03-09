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

  useEffect(() => {
    setCount(cartItems.length);
  }, [cartItems]);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = (count) => {
    if (count >= 0) {
      setCount(count - 1);
    }
  };

  const addToCart = (id) => {
    setCartItems((cart) => [...cart, id]);
  };

  const removeFromCart = (id) => {
    setCartItems((cart) => {
      let newCart = [...cart];
      let index = cart.indexOf(id);
      newCart.splice(index, 1);
      return newCart;
    });
  };

  return (
    <BrowserRouter>
      <Navbar count={count} />
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
          render={(props) => (
            <Cart
              {...props}
              cartItems={cartItems}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              count={count}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

// render={(props) => <Home {...props} yourProp = {yourProp} />}

export default Routes;
