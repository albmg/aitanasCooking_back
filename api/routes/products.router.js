const router = require('express').Router()

const {
  viewAllProducts,
  getProduct,
  createProduct,
  updateProduct
} = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .post('/', createProduct)
  .get('/:productId', getProduct)
  .put('/:productId', updateProduct)

module.exports = router
