
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
  axios.post('http://customer:3001/signup', req.body);
  res.status(202).send({ message: 'Signup in progress' });
});

app.post('/signin', async (req, res) => {
  try {
    const response = await axios.post('http://customer:3001/signin', req.body);
    res.status(response.status).send(response.data);
  } catch (err) {
    const status = err.response ? err.response.status : 500;
    const data = err.response ? err.response.data : { message: 'Error' };
    res.status(status).send(data);
  }
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
