const router = require('express').Router()

const authRouter = require('./auth.router')
const menusRouter = require('./menus.router')
const ordersRouter = require('./orders.router')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')


router
  .use('/auth', authRouter)
  .use('/menus', menusRouter)
  .use('/orders', ordersRouter)
  .use('/products', productsRouter)
  .use('/users', usersRouter)

module.exports = router
