
const express = require('express');
const mongoose = require('mongoose');
const Shopping = require('./models/Shopping');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://mongo:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/shopping', async (req, res) => {
  const shopping = new Shopping(req.body);
  await shopping.save();
  res.status(201).send(shopping);
});

app.listen(3003, () => console.log('Shopping Service running on port 3003'));
