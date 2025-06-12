
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/customer', async (req, res) => {
  axios.post('http://customer:3001/customer', req.body);
  res.status(202).send({ message: 'Customer creation in progress' });
});

app.post('/products', async (req, res) => {
  axios.post('http://products:3002/products', req.body);
  res.status(202).send({ message: 'Product creation in progress' });
});

app.post('/shopping', async (req, res) => {
  axios.post('http://shopping:3003/shopping', req.body);
  res.status(202).send({ message: 'Shopping creation in progress' });
});

app.listen(3000, () => console.log('API Gateway running on port 3000'));
