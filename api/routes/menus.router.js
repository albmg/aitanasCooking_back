const router = require('express').Router()

const {
  viewAllMenus,
  getMenu,
  createMenu
} = require('../controllers/menus.controller')

router
  .get('/', viewAllMenus)
  .get('/:menuId', getMenu)
  .post('/', createMenu)

  module.exports = router
