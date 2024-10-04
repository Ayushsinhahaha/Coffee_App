const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("./models/UserDetails");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const cors = require("cors");
const bodyParser = require("body-parser");

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/stripe',express.raw({type: "*/*" }))

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
app.post("/payment-sheet", async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const amount = req.body.amount;
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2024-06-20" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "inr",
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
    metadata:{name:'Ayush'}
  });

  const clientSecret=paymentIntent.client_secret
  // console.log('object',transactionId)

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.PUBLISHABLE_KEY,
    clientSecret: clientSecret
  });

  // console.log('paymentIntent',paymentIntent)
});

app.post("/stripe", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = await stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    

  } catch (error) {
    console.log(error);
    res.status(400).send(`Webhook Error:${error.message}`);
  }

  //Event when a payment is initiated
  // if (event.type === "payment_intent.created") {
  //   console.log(`${event.data.object.metadata.name} initiated Payment `);
  // }
  // if (event.type === "payment_intent.succeeded") {
  //   console.log(`${event.data.object.metadata.name} succeeded Payment `);
  // }
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment initiated')
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('Payment Successful')
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  // res.json({ ok: true });
  res.json({ received: true });
});

// app.post('/webhook', express.json({type: 'application/json'}), (request, response) => {
//   const event = request.body;

//   // Handle the event
  // switch (event.type) {
  //   case 'payment_intent.succeeded':
  //     const paymentIntent = event.data.object;
  //     console.log('Payment initiated')
  //     // Then define and call a method to handle the successful payment intent.
  //     // handlePaymentIntentSucceeded(paymentIntent);
  //     break;
  //   case 'payment_method.attached':
  //     const paymentMethod = event.data.object;
  //     console.log('Payment Successful')
  //     // Then define and call a method to handle the successful attachment of a PaymentMethod.
  //     // handlePaymentMethodAttached(paymentMethod);
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

//   // Return a response to acknowledge receipt of the event
//   response.json({received: true});
//   if(response)
//   {
//     console.log('response from webhook',response)
//   }
// });


//chatgpt code
// app.post('/stripe', express.raw({ type: 'application/json' }), (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   let event;

//   try {
//       event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//   } catch (err) {
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle the event
//   switch (event.type) {
//       case 'payment_intent.succeeded':
//           const paymentIntent = event.data.object;
//           console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
//           break;
//       // Add more event types here based on your needs
//       default:
//           console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a response to acknowledge receipt of the event
//   res.json({ received: true });
// });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port 5000`);
});
