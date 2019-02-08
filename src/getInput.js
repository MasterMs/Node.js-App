var mysql = require('mysql');

var name = document.getElementById('textbox_id').value;
var email = document.getElementById('textbox_id').value;
var password = document.getElementById('textbox_id').value;


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  
db.connect(function(err) {
if (err) throw err;
console.log(`Connection established to MySQL Database: ${process.env.DB_NAME} @ ${process.env.DB_HOST}:${process.env.DB_PORT}`);
});


const queryString = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?);'
db.query(queryString, [name, email, password], (err, rows, fields) => {
    console.log('Insert Line DB "user"');
});