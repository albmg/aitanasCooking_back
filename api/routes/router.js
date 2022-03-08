const router = require('express').Router()

const menusRouter = require('./menus.router')
const ordersRouter = require('./orders.router')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')


router
  .use('/menus', menusRouter)
  .use('/orders', ordersRouter)
  .use('/products', productsRouter)
  .use('/users', usersRouter)

module.exports = router
