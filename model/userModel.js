const connectionDb = require("../configs/mysqlConfig")

const userRegister = async ({ nome, email, telefone, senha }) => {

  const query = "INSERT INTO usuario (nome, email, senha, telefone) VALUES (?, ?, ?, ?)"
  const values = [nome, email, senha, telefone]

  const conn = await connectionDb()
  const [result] = await conn.execute(query, values)

  console.log(result)

  return {
    id: result.insertId,
    nome,
    email,
    telefone,
  }
}

module.exports = {
  userRegister,
}