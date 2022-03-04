const OrderModel = require('../models/orders.model')
const mongoose = require('mongoose')

function viewAllOrders (req, res) {
  OrderModel
    .find()
    .populate('purchasedProducts')
    .populate('purchasedMenus')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getOrder (req, res) {
  OrderModel
    .findById(req.params.orderId)
    .populate('purchasedProducts')
    .populate('purchasedMenus')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


function createOrder (req, res) {
    OrderModel
      .create(req.body)
      .then( order => {
        res.json( order )
      })
      .catch(err => { console.error(err)})
}

module.exports = {
  viewAllOrders,
  getOrder,
  createOrder
}
