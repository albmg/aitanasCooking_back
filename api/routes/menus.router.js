const router = require('express').Router()
const { authUser } = require('../utils')

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
  .post('/me', authUser, createMenu)
  .put('/me/:menuId', updateMenu)
  .delete('/:menuId', deleteMenu)

  module.exports = router
