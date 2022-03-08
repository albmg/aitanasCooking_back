const UserModel = require('../models/users.model')

const mongoose = require('mongoose')

function getProfile (req, res) {
  UserModel
    .findById(res.locals.user._id)
    .then(response => res.json(response))
    .catch(err => console.error(err))
}

module.exports = {
  getProfile
}
