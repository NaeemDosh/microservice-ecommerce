
const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/Customer');
const app = express();

app.use(express.json());
mongoose.connect('mongodb://mongo:27017/customer', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/customer', async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).send(customer);
});

app.listen(3001, () => console.log('Customer Service running on port 3001'));
