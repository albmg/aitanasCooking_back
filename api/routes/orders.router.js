const router = require('express').Router()

const {
  viewAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/orders.controller')

router
  .get('/', viewAllOrders)
  .get('/:orderId', getOrder)
  .post('/', createOrder)
  .put('/:orderId', updateOrder)
  .delete('/:orderId', deleteOrder)

  module.exports = router
