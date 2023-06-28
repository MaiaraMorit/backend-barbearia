const userService = require('../service/userService');

const userLogin = (req, res, next) => {
  try {
    const result = userService.userLogin()
    return res.status(200).json(result) 
  } catch (error) {
    next(error)
  }
}

module.exports = {
  userLogin,
}
