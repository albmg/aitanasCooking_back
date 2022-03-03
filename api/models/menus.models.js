const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
  name: {
    type: String
  },
  number: {
    type: Number
  }
  image: {
    type: String
  },
  description: {
    type: String
  },
  createdDate: {
    type: Date
  },
  diners: {
    type: Number
  },
  dishes: {
    type: Array
  }
})

const menuModel = mongoose.model('menu', menuSchema)
module.exports = menuModel
