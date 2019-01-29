//imports
var http = require('http');
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var dotenv = require('dotenv');
var express = require('express');

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
var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

// if error throw error else, connect to database and log connection
db.connect(function(err) {
  if (err) {throw err;}
  console.log(`MySQL Database connected @ ${process.env.DB_HOST}:${process.env.DB_PORT}`);
});

//intialize static files 
app.use(express.static('public'));

//create server connection and log it
app.listen(port, hostname, () => {
  console.log(`Server running @ ${hostname}:${port}/`);
});

//routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

