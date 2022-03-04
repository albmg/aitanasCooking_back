const router = require('express').Router()

const productsRouter = require('./products.router')
const menusRouter = require('./menus.router')
const ordersRouter = require('./orders.router')

router
  .use('/products', productsRouter)
  .use('/menus', menusRouter)
  .use('/orders', ordersRouter)

module.exports = router
