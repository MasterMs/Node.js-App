//imports
var http = require('http');
var fs = require('fs');
var path = require('path');
var dotenv = require('dotenv');
var express = require('express');
var mysql = require('mysql');


//initialize express
var app  = express();

//initialize dotenv
const result = dotenv.config();
if (result.error){
  throw result.error;
}

// initialize hostname and port
const hostname = 'localhost';
const port = 8080;

//initialize database credentials and create a database connection
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// if error throw error else, connect to database and log connection
con.connect(function(err) {
  if (err) throw err;
  console.log(`connected to ${process.env.DB_NAME} @ ${process.env.DB_HOST}:${process.env.DB_PORT}`);
});

//intialize static files 
app.use(express.static('public'));

//create server connection and log it
app.listen(port, hostname, () => {
  console.log(`Server running @ ${hostname}:${port}`);
});


//routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', function(req, res){
  con.query("SELECT * FROM users", (err, rows, fields) => {
  console.log(rows[0]['username']);
  res.json(rows);

})
  //res.end();
});
