const router = require('express').Router()

const {
  viewAllOrders,
  getOrder,
  createOrder,
  updateOrder
} = require('../controllers/orders.controller')

router
  .get('/', viewAllOrders)
  .get('/:orderId', getOrder)
  .post('/', createOrder)
  .put('/:orderId', updateOrder)

  module.exports = router
