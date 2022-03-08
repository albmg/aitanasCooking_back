const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    unique: [true, 'Email already exists in our database'],
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'email not valid']
  },
  password: {
    type: String,
    select: false,
    required: [true, 'Password is required']
  }
})


const userModel = mongoose.model('user', userSchema)
module.exports = userModel
