const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  adress: {
    type: String
  },
  phone: {
    type: Number
  },
  purchasedProducts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  },
  purchasedMenus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'menu'
  }
})

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel
