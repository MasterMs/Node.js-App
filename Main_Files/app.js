var http = require('http');
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var dotenv = require('dotenv');
var express = require('express');

var app  = express();

const result = dotenv.config();
if (result.error){
  throw result.error;
}

// define hostname and port
const hostname = 'localhost';
const port = 8080;


var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

db.connect(function(err) {
  if (err) {throw err;}
  console.log(`MySQL Database connected @ ${process.env.DB_HOST}:${process.env.DB_PORT}`);
});

app.use(express.static('public'));

app.listen(port, hostname, () => {
  console.log(`Server running @ ${hostname}:${port}/`);
});

//routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

