const router = require('express').Router()

const {
  viewAllProducts,
  getProduct
} = require('../controllers/products.controller')

router
  .get('/', viewAllProducts)
