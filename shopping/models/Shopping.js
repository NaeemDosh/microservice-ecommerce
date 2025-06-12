
const mongoose = require('mongoose');

const ShoppingSchema = new mongoose.Schema({
  customerId: String,
  productId: String,
  quantity: Number
});

module.exports = mongoose.model('Shopping', ShoppingSchema);
