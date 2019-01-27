var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({
  path: './.env'
})


//const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 8080;


const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DBPASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

