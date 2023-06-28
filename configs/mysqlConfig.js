const mysql = require('mysql2/promise');

const connectionDb = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',      // Endereço do banco de dados
    user: 'root',    // Usuário do banco de dados
    password: 'secret',  // Senha do banco de dados
    database: 'barbearia'   // Nome do banco de dados
  })

  return connection

}

module.exports = connectionDb;
