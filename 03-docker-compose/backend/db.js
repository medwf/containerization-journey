const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'crud_db'
});

module.exports = db;
