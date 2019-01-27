const http = require('http');

//const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.log(process.env.dbPass);
});
process.env