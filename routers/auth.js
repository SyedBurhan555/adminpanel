const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn.js");
const User = require("../models/student.js");

router.post("/register", async (req, res) => {
  const { name, email, phone, yourprofession, password, cpassword } = req.body;
  if (!name || !email || !phone || !yourprofession || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill All Data" });
  }
  try {
    const response = await User.findOne({ email: email });
    if (response) {
      return res.status(422).json({ error: "Email Already exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "password not matching" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        yourprofession,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "You Login SuccessFully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ message: "Please fill data" });
    }
    const userlogin = await User.findOne({ email: email });
    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      token = await userlogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        http: true,
      });
      if (!isMatch) {
        return res.status(400).json({ error: "You are Not Regsiter" });
      } else {
        res.status(201).json({ message: "You Are Successfully Login" });
      }
    } else {
      res.status(400).json({ error: "invalid Credientail" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  console.log("welcome to my about page");
  res.send(req.rootUser);
});

router.post("/userdata", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "please fill all data" });
    }
    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "user Contact successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/logout',(req,res)=>{
  console.log("hello my logout page")
  res.clearCookie("jwtoken",{path:"/"})
  res.status(200).send("User LogOut")
})

module.exports = router;
