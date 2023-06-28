const userService = require('../service/userService');

const userRegister = async (req, res, next) => {
  try {
    const result = await userService.userRegister(req.body)
    return res.status(200).json(result) 
  } catch (error) {
    next(error)
  }
}

module.exports = {
  userRegister,
}
