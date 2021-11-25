import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
   const [userData, setuserData] = useState({});
  const history = useHistory();
  
  const CallAboutPage = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setuserData(data)
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    CallAboutPage();
  }, []);

  return (
    <>
      <div className="container">
        <form method="GET">
          <div className="row mt-4">
            <div className="col-md-4">
              <img
                src="image.jpg"
                alt="profilepic"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h2>{userData.name}</h2>
              <h4>Web Developer</h4>
              <p>Ranking: 1/10</p>
              <ul class="nav nav-tabs" id="mytab">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#home">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#profile">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 form-group">
              <input
                type="submit"
                className="form-control mt-4"
                value="Edit Profile"
                name="btn"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-3">
              <p>WORKS LINK</p>
              <p>Youtube</p>
              <p>Instagram</p>
              <p>Burhan channel</p>
              <p>web developer</p>
              <p>software Engineer</p>
              <p>MERN Developer</p>
            </div>
            <div className="col-md-8">
              <div class="tab-content" id="mytabcontent">
                <div class="tab-pane fade show active" id="home">
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>User id</label>
                    </div>
                    <div className="col-md-6">
                      <p>1274582</p>
                    </div>
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                    <div className="col-md-6">
                      <label>City</label>
                    </div>
                    <div className="col-md-6">
                      <p>Karachi</p>
                    </div>
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                    <div className="col-md-6">
                      <label>Working</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.yourprofession}</p>
                    </div>
                    <div className="col-md-6">
                      <label>Goal</label>
                    </div>
                    <div className="col-md-6">
                      <p>Full Stack Web And Mobile App Developer </p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile">
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Fresh</p>
                    </div>
                    <div className="col-md-6">
                      <label>Hours Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>Fresh</p>
                    </div>
                    <div className="col-md-6">
                      <label>Total Project</label>
                    </div>
                    <div className="col-md-6">
                      <p>10</p>
                    </div>
                    <div className="col-md-6">
                      <label>English level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Normal</p>
                    </div>
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>just now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
