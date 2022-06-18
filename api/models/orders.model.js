const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, "Client Name is required"]
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'email not valid']
  },
  adress: {
    type: String,
    required: [true, "adress is required"]
  },
  phone: {
    type: String,
    required: [true, 'phone is required'],
    //match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, 'phone not valid']
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  purchasedProducts: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product'
    },
    quantity: {
      type: Number
    }
  }],
  purchasedMenus: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'menu'
  }],
  deliveryDate: {
    type: Date,
    required: [true, 'deliveryDate is required']
  },
  deliveryTime: {
    type: String
  },
  distance: {
    type: Number
  },
  duration: {
    type: Number
  }
})

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel
