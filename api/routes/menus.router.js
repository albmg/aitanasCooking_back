const router = require('express').Router()

const {
  viewAllMenus
} = require('../controllers/menus.controller')

router
  .get('/', viewAllMenus)

  module.exports = router
