const router = require('express').Router()

const {
  viewAllOrders
} = require('../controllers/orders.controller')

router
  .get('/', viewAllOrders)

  module.exports = router
