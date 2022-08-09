const router = require('express').Router()

const {
  viewAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/orders.controller')

router
  .get('/me', viewAllOrders)
  .get('/me/:orderId', getOrder)
  .post('/', createOrder)
  .put('/me/:orderId', updateOrder)
  .delete('/me/:orderId', deleteOrder)

  module.exports = router
