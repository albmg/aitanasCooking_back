const router = require('express').Router()

const {
  viewAllMenus,
  getMenu
} = require('../controllers/menus.controller')

router
  .get('/', viewAllMenus)
  .get('/:menuId', getMenu)

  module.exports = router
