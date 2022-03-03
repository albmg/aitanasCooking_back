const router = require('express').Router()

const productsRouter = require('./products.router')

router
  .use('/products', productsRouter)

module.exports = router
