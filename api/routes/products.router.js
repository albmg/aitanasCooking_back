const router = require('express').Router()

const {
  viewAllProducts,
  getProduct,
  createProduct
} = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .post('/', createProduct)
  .get('/:productId', getProduct)

module.exports = router
