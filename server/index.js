const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("./models/UserDetails");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const cors = require("cors");

//middlewares
app.use(cors());
app.use(express.json());

const User = mongoose.model("User");
//connect to db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

//for jwtauthentication
const JWT_TOKEN = process.env.JWT_SECRET;

app.get("/", (req, res) => {
  res.send({ status: "Started" });
});

// signup api
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const oldUser = await User.findOne({ email: email });

  if (oldUser) {
    return res.send({ data: "Email already exists" });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      name: name,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok", data: "User Created" });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});

//login api
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const oldUser = await User.findOne({ email: email });

  if (!oldUser) {
    return res.send({ data: "User doesn't exist" });
  }
  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({ email: oldUser.email }, JWT_TOKEN);

    if (res.status(201)) {
      return res.send({ status: "ok", data: token });
    } else {
      return res.send({ error: "error" });
    }
  }
});

// userdata token
app.post("/userdata", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_TOKEN);
    const useremail = user.email;
    //now get data from email
    User.findOne({ email: useremail }).then((data) => {
      return res.send({ status: "ok", data: data });
    });
  } catch (error) {
    return res.send({ error: error });
  }
});

//stripe
app.post("/pay", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) return res.status(400).json({ message: "Please enter a name" });

    //payment intents
    const paymentIntent = await stripe.paymentIntent.create;
    ({
      amount: Math.round(25 * 100),
      currency: "INR",
      payment_method_types: ["card"],
      metadata: { name, email },
    });
    //important for the client to proceed for any of the payment
    const clientSecret = paymentIntent.client_secret;
    res.json({ message: "Payment Initiated", clientSecret });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port 5000`);
});
