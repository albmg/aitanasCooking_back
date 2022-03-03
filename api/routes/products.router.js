const router = require('express').Router()

const {
  viewAllProducts,
  getProduct
} = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .get('/:productId', getProduct)

module.exports = router
