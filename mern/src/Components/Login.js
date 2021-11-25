import React, { useContext, useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {

const {state,dispatch} = useContext(UserContext)

    const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const LoginUser = async (e)=>{
        e.preventDefault();
        const res = await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data = res.json()
        if(res.status === 400 || !res){
            window.alert("Invalid Crediential")
        }
        else{
          dispatch({type:'USER',payload:true})
            window.alert("Login Successfull")
            history.push("/")
        }
    }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src="./login.png"
              alt="not found"
              className="img-fluid mt-5 mb-3 rounded"
            />
            <br />
            <Link to="/signup" className="mt-5 text-center">
              Create Account First
            </Link>
          </div>
          <div className="col-md-6 mt-5">
            <h2 className="mt-5">Sign Up</h2>
            <form method="POST">
              <div class="form-group mt-4">
                <label>
                  <i class="fa fa-user fa-1x  mx-2"></i>
                </label>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  class="form-control"
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  name="email"
                />
              </div>
              <div class="form-group mt-4">
                <label>
                  <i class="fas fa-key fa-1x mx-2"></i>
                </label>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  class="form-control"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  name="password"
                />
              </div>
              <button
                type="submit"
                value="login"
                name="signin"
                onClick={LoginUser}
                className="btn btn-success mb-3 w-25"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
