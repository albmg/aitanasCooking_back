const router = require('express').Router()

const productsRouter = require('./products.router')
const menusRouter = require('./menus.router')

router
  .use('/products', productsRouter)
  .use('/menus', menusRouter)

module.exports = router
