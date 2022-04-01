const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
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
  ingredients: {
    type: [String],
    required: true,
    validate: [(value) => value.length > 0, 'No outputs'],
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  units: {
    type: Number
  },
  weight: {
    type: Number
  }
})



const productModel = mongoose.model('product', productSchema)
module.exports = productModel
