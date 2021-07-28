const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JEz2YSJr1dGGnXFeCSKJMZquTnOVW84ZlokGESx9fSZzSd8ycwZsVAWtLu57RXzVHNItIKvDyIZ7X7BREkzV8pi00vCVXpknb')


//api

//app config
const app = express();

//middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send('hello'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received! for this amount>>', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "INR",
    });

    // OK - Created(201)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listen command
exports.api = functions.https.onRequest(app)


//example endpoint
//http://localhost:5001/clone-1ef4f/us-central1/api