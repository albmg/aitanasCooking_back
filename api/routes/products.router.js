const router = require('express').Router()
const { authUser } = require('../utils')

const {
  viewAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
  .get('/:productId', getProduct)
  .post('/me', authUser, createProduct)
  .put('/:productId', updateProduct)
  .delete('/me/:productId', authUser, deleteProduct)

module.exports = router
