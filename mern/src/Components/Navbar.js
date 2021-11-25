import React,{useContext} from "react";
import {Link} from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext)

    const RenderMenu = ()=>{
      if(state){
        return (
          <>
           <li className="nav-item">
      <Link className="nav-link text-white" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/logout">Logout</Link>
      </li>

          </>
        )
      }else{
        return(
          <>
        <li className="nav-item">
      <Link className="nav-link text-white" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/login">Login</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/signup">Signup</Link>
      </li>
        </>
        )
      }
    }
    return ( 
        <>
      
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
  <Link className="navbar-brand text-danger font-weight-bold">Syed Burhan</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Mynavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="Mynavbar">
    <ul className="navbar-nav ml-auto">
      <RenderMenu/>
    </ul>
  </div>
  </div>
</nav>

        </>
     );
}
 
export default Navbar;