const mongoose = require("mongoose");
const DB = process.env.MONGO_URL;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection SuccessFully"))
  .catch((error) => console.log(error));