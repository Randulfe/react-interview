import { useState } from 'react';
import Nav from './components/Nav';
import Products from './components/Products';
import AddConsole from './components/AddConsole';
import NotFound from './components/NotFound';
import Data from './components/Data';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [products, setProducts] = useState(Data);

  return (
    <div className="container">
      <Nav/>
      <Router>
      <Switch>
        <Route exact path='/'>
        <Products products = {products}></Products>
        </Route>
        <Route exact path='/404' component={NotFound}/>
        <Route path='/product/:id' component={AddConsole}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
