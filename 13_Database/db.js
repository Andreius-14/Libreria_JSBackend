const mysql = require('mysql2/promise')

async function connectionDB () {
  const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    ssl: {
      rejectUnauthorized: false
    }
  })

  const result = await connection.query('SELECT 1 + 1 AS Result')
  console.log(result)
}
module.exports = {
  connectionDB
}
