const router = require('express').Router()

const {
  viewAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .post('/', createProduct)
  .get('/:productId', getProduct)
  .put('/:productId', updateProduct)
  .delete('/:productId', deleteProduct)

module.exports = router
