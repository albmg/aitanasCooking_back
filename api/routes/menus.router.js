const router = require('express').Router()

const {
  viewAllMenus,
  getMenu,
  createMenu,
  updateMenu
} = require('../controllers/menus.controller')

router
  .get('/', viewAllMenus)
  .get('/:menuId', getMenu)
  .post('/', createMenu)
  .put('/:menuId', updateMenu)

  module.exports = router
