
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Customer = require('./models/Customer');
const app = express();

app.use(express.json());
mongoose.connect('mongodb://mongo:27017/customer', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const customer = new Customer({ name, email, password: hashed });
  await customer.save();
  res.status(201).send(customer);
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const customer = await Customer.findOne({ email });
  if (customer && await bcrypt.compare(password, customer.password)) {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

app.listen(3001, () => console.log('Customer Service running on port 3001'));
