const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  number: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    required: [true, "Image is required"]
  },
  description: {
    type: String,
    maxlength: [325, "max character length allowed is 325"],
    minlength: [1, "min character length allowed is 1"],
    required: [true, "Description is required"]
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  diners: {
    type: Number,
    default: 0
  },
  price: {
    type: Number
  },
  defaultUnits: {
    type: Number,
    default: 1
  },
  dishes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  }]
})

const menuModel = mongoose.model('menu', menuSchema)
module.exports = menuModel
