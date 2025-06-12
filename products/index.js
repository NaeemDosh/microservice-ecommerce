
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://mongo:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send(product);
});

app.listen(3002, () => console.log('Products Service running on port 3002'));
