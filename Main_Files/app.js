var http = require('http');
var fs = require('fs');
var mysql = require('mysql');

//const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 8080;
const database ={
  'host': 'localhost',
  'user': "root",
  'password': "admin"
}

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
  host: database['host'],
  user: database['user'],
  password: database['password']
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.log(process.env.dbPass);
});
process.env