const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  ingredients: {
    type: Array
  },
  createdDate: {
    type: Date
  }
})



const productModel = mongoose.model('product', productSchema)
module.exports = productModel
