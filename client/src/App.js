import React from "react";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success"
import {Switch,Route, Redirect} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {

  const user = useSelector(state=>state.user.currentUser);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
         <Route path="/success">
          <Success/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/>: <Login/>}
          <Login/>
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/"/>: <Register/>}
          <Register/>
        </Route>

      </Switch>
    </>
  );
};

export default App;

