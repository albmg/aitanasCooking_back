const OrderModel = require('../models/orders.model')
const mongoose = require('mongoose')

function viewAllOrders (req, res) {
  OrderModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  viewAllOrders
}
