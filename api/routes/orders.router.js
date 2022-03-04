const router = require('express').Router()

const {
  viewAllOrders,
  getOrder,
  createOrder
} = require('../controllers/orders.controller')

router
  .get('/', viewAllOrders)
  .get('/:orderId', getOrder)
  .post('/', createOrder)

  module.exports = router
