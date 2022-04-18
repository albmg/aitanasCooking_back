const MenuModel = require('../models/menus.model')
//const ProductModel = require('../models/products.model')
const mongoose = require('mongoose')

function viewAllMenus (req, res) {
  MenuModel
    .find()
    .populate('dishes')
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

function getMenu (req, res) {
  MenuModel
    .findById(req.params.menuId)
    .populate('dishes')
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

function updateMenu (req, res) {
  MenuModel
  .updateOne({ _id: req.params.menuId }, req.body, {new: true})
  .then(menu => res.json(menu))
  .catch(err => console.error(err))
}


function deleteMenu (req, res) {
  MenuModel
    .deleteOne({ _id: req.params.menuId})
    .then(response => { res.json(response)})
    .catch(err => console.error(err))
}

module.exports = {
  viewAllMenus,
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu
}
