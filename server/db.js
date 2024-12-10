const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createPool({
    host: 'localhost',
    user: 'alexml',
    password: 'Trtploergvui1',
    database: 'mysqltodo',
    port: 3306
});

module.exports = connection;