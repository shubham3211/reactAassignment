const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  proName: String,
  proNo: Number,
  proPrice: Number
})

let Product =  new mongoose.model('product', productSchema);
module.exports = Product;