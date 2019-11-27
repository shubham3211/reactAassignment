const mongoose = require('mongoose');
const express = require('express');
let app = express();
let Product = require('./product');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  next();
})

mongoose.connect('mongodb://shubham:shubham123@ds018168.mlab.com:18168/nn-outh-test')
  .then(() => {
    connect();
  })
  .catch((err) => console.log(err))

function connect() {
  app.listen(5000, () => {
    console.log("Listening on port 5000");
  })
}

app.get('/products', (req, res) => {
  Product.find({})
    .then((products) => {
      res.send({
        status: true,
        result: products,
        message: "Products found successfully"
      })
    })
    .catch((err) => {
      res.send({
        status: false,
        message: err
      })
    })
})

app.post("/product", (req, res) => {
  let { proNo, proName, proPrice } = req.body;
  console.log(req.body);
  let product = new Product({ proName, proNo, proPrice });
  product.save()
    .then((result) => {
      console.log("success")
      res.send({
        status: true,
        message: "Product Inserted successfully",
        result
      })
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        message: "Cannot insert the product"
      })
    })
})