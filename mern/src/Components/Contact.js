import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const UserContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setuserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    UserContact();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserData({ ...userData, [name]: value });
  };

  const contactform = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;
    const res = await fetch("/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message not found");
    } else {
      alert("message send");
      setuserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <i class="fas fa-mobile-android-alt mx-2 text-primary mt-2 MyFont">
                <span className="mx-2 text-dark">Phone</span>
              </i>
              <p className="mx-4 mt-2 text-muted">03101087932</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <i class="fas fa-envelope-square mx-2 text-primary mt-2 MyFont">
                <span className="mx-2 text-dark">Email</span>
              </i>
              <p className="mx-4 mt-2 text-muted">syedburhanali555@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <i class="fas fa-mobile-android-alt mx-2 text-primary mt-2 MyFont">
                <span className="mx-2 text-dark">Address</span>
              </i>
              <p className="mx-4 mt-2 text-muted">
                Karachi Pakistan shah faisal Town
              </p>
            </div>
          </div>
          <div className="col-md-10 MyClass">
            <div className="card p-4">
              <h4 className="mt-5">Get in Touch</h4>
              <form method="POST">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <div class="form-group mt-4">
                      <input
                        type="text"
                        class="form-control"
                        onChange={handleInput}
                        value={userData.name}
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="form-group mt-4">
                      <input
                        type="email"
                        class="form-control"
                        onChange={handleInput}
                        value={userData.email}
                        autoComplete="off"
                        placeholder="Enter Your Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="form-group mt-4">
                      <input
                        type="number"
                        class="form-control"
                        onChange={handleInput}
                        value={userData.phone}
                        autoComplete="off"
                        placeholder="Enter Mobile Number"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea
                    placeholder="Message"
                    name="message"
                    class="form-control"
                    rows="6"
                    onChange={handleInput}
                    value={userData.message}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-success mb-3 w-25"
                  onClick={contactform}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
