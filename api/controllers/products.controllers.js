const ProductModel = require('../models/products.model')
const mongoose = require('mongoose')


function viewAllProducts (req, res) {
  ProductModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getProduct (req, res) {
  ProductModel
    .findById(req.params.productId)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

