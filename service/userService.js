const userModel = require('../model/userModel');

const userRegister = async ({ nome, email, telefone, senha }) => {
  const result = await userModel.userRegister({ nome, email, telefone, senha })
  return result
}

module.exports = {
  userRegister,
}
