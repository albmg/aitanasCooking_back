const MenuModel = require('../models/menus.model')
const mongoose = require('mongoose')

function viewAllMenus (req, res) {
  MenuModel
    .find()
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getMenu (req, res) {
  MenuModel
    .findById(req.params.menuId)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function createMenu (req, res) {
  MenuModel
    .create(req.body)
    .then( menu => {
      res.json( menu )
    })
    .catch(err => { console.error(err)})
}

module.exports = {
  viewAllMenus,
  getMenu,
  createMenu
}
