var http = require('http');
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config()


//const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 8080;


const server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});


var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});