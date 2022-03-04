const router = require('express').Router()

const {
  viewAllMenus,
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu
} = require('../controllers/menus.controller')

router
  .get('/', viewAllMenus)
  .get('/:menuId', getMenu)
  .post('/', createMenu)
  .put('/:menuId', updateMenu)
  .delete('/:menuId', deleteMenu)

  module.exports = router
