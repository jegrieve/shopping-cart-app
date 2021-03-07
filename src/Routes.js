import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
