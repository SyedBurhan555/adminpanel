const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

app.use(cookieParser())
app.use(express.json())

dotenv.config({path:"./config.env"})
require("./db/conn.js")

app.use(require("./routers/auth.js"))

if(process.env.NODE_ENV === "production"){
  app.use(express.static("mern/build"))
}



app.listen(PORT,()=>{
  console.log(`Connection is setup on ${PORT}`)
})