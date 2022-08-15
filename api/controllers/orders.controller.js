const OrderModel = require('../models/orders.model')
const mongoose = require('mongoose')

function viewAllOrders (req, res) {
  OrderModel
    .find()
    .populate('purchasedProducts.productId')
    .populate('purchasedMenus.menuId')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getOrder (req, res) {
  OrderModel
    .findById(req.params.orderId)
    .populate('purchasedProducts.productId')
    .populate('purchasedMenus.menuId')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}


function createOrder (req, res) {
    OrderModel
      .create(req.body)
      .then(order => {
        //order.cart.push()
        res.json( order )
      })
      .catch(err => { console.error(err)})
}


function updateOrder (req, res) {
  OrderModel
    .updateOne({ _id: req.params.orderId }, req.body, {new: true})
    .then(product => res.json(product))
    .catch(err => console.error(err))
}

function deleteOrder (req, res) {
  OrderModel
    .deleteOne({ _id: req.params.orderId})
    .then(response => { res.json(response)})
    .catch(err => console.error(err))
}


module.exports = {
  viewAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
}
