const OrderModel = require('../models/orders.model')
//const ProductModel = require('../models/products.model')
const mongoose = require('mongoose')

function viewAllOrders (req, res) {
  OrderModel
    .find()
    .populate('purchasedProducts')
    .populate('purchasedMenus')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  viewAllOrders
}
