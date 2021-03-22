var mysql = require('mysql')
var dbConfig = require('./db.config.js')

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

connection.connect(error => {
    if(error) throw error;
    console.log("Connected to database");
});

module.exports = connection;