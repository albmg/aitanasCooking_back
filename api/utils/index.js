const jwt = require('jsonwebtoken')
const UserModel = require('../models/users.model')

// Authenticate Middleware
function authUser (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ ok: false, error: 'No Token found' })
  } else {
    try {

      const decodedToken = jwt.verify(req.headers.token, process.env.SECRET)

      UserModel
        .findOne({ email: decodedToken.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    } catch (error) {
      res.status(403).json({ ok: false, error: `Token not valid + ${error}` })
    }
  }
}

module.exports = {
  authUser
}
