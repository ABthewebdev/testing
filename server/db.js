const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection(process.env.MYSQL_URL);

module.exports = connection;