const router = require('express').Router()

const {
  viewAllOrders,
  getOrder
} = require('../controllers/orders.controller')

router
  .get('/', viewAllOrders)
  .get('/:orderId', getOrder)

  module.exports = router
