import React, { createContext, useReducer } from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Error from "./Components/Error";
import Logout from "./Components/logout";
import { initialState,reducer } from "./reducer/useReducer";

export const UserContext = createContext()

const Routing = ()=>{
  return(
    <>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/logout" component={Logout} />
    <Route path="/" component={Error} />
  </Switch>
    </>
  )
}

const App = () => {
 
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar />
    <Routing/>
    </UserContext.Provider>
     
    </>
  );
};

export default App;
