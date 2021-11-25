import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    yourprofession: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, yourprofession, password, cpassword } = user;
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        yourprofession,
        password,
        cpassword,
      })
    });
    const data = await response.json();
    if (data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Successfully login");

      history.push("/login");
    }
  };

  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h2>Sign Up</h2>
              <form method="POST">
                <div class="form-group mt-4">
                  <label>
                    <i class="fa fa-user fa-1x  mx-2"></i>
                  </label>
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={user.name}
                    onChange={handleInput}
                    autoComplete="off"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                </div>
                <div class="form-group mt-4">
                  <label>
                    <i class="fas fa-envelope-square fa-1x mx-2"></i>
                  </label>
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    value={user.email}
                    onChange={handleInput}
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    name="email"
                  />
                </div>
                <div class="form-group mt-4">
                  <label>
                    <i class="fas fa-mobile-android-alt mx-2 fa-1x"></i>
                  </label>
                  <label>Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    value={user.phone}
                    onChange={handleInput}
                    autoComplete="off"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                  />
                </div>
                <div class="form-group mt-4">
                  <label>
                    <i class="fas fa-user-tie mx-2"></i>
                  </label>
                  <label>Your Profession</label>
                  <input
                    type="text"
                    class="form-control"
                    value={user.yourprofession}
                    onChange={handleInput}
                    autoComplete="off"
                    placeholder="Enter Your Profession"
                    name="yourprofession"
                  />
                </div>
                <div class="form-group mt-4">
                  <label>
                    <i class="fas fa-key mx-2"></i>
                  </label>
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    value={user.password}
                    onChange={handleInput}
                    autoComplete="off"
                    placeholder="Enter Your Password"
                    name="password"
                  />
                </div>
                <div class="form-group mt-4">
                  <label>
                    <i class="fas fa-unlock mx-2"></i>
                  </label>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    value={user.cpassword}
                    onChange={handleInput}
                    autoComplete="off"
                    placeholder="Confirm Your Password"
                    name="cpassword"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success mb-3 w-25"
                  onClick={PostData}
                >
                  Register
                </button>
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="./signin.jpg"
                alt="not found"
                className="img-fluid mt-5 mb-3 rounded"
              />

              <Link to="/login" className="mt-5 text-center">
                I am Already Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
