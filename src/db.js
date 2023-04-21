const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'miyamoto',
  port:3306,
  database: 'companydb'

})



module.exports = pool