const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");
const ProductRoutes = require("./routers/product");
const OrderRoutes = require("./routers/order");
const CartRoutes = require("./routers/cart");
const stripeRoutes = require("./routers/stripe");
const cors = require("cors");
const path = require("path")

app.use(express.json());

dotenv.config({ path: "./config.env" });
require("./db/conn.js");

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/carts", CartRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/checkouts", stripeRoutes);


app.use(express.static(path.join(__dirname,"/admin/build")))



app.listen(PORT, () => {
  console.log(`Connection is setup on ${PORT}`);
});
