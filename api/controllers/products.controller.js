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

function createProduct (req, res) {
  ProductModel
    .create(req.body)
    .then( product => res.json( product ))
    .catch(err => { console.error(err)})
}

function updateProduct (req, res) {
  ProductModel
    .updateOne({ _id: req.params.productId }, req.body, {new: true})
    .then(product => res.json(product))
    .catch(err => console.error(err))
}

function deleteProduct (req, res) {
  ProductModel
    .deleteOne({ _id: req.params.productId})
    .then(response => { res.json(response)})
    .catch(err => console.error(err))
}

module.exports = {
  viewAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
