//imports
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
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// if error throw error else, connect to database and log connection
db.connect(function(err) {
  if (err) throw err;
  console.log(`Connection established to ${process.env.DB_NAME} @ ${process.env.DB_HOST}:${process.env.DB_PORT}`);
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
  console.log(`\nGET index.html`);
});

app.get('/user', function(req, res){
  const queryString = "SELECT * FROM user";
  db.query(queryString, (err, rows, fields) => {
    console.log(`\nGET /user`);
    res.json(rows);
  });
});

app.get('/user/:id', function(req, res){
  const userId = req.params.id;
  const queryString = "SELECT * FROM user WHERE id = ?";
  db.query(queryString, [userId], (err, rows, fields) => {
    console.log(`GET ${userId} from ${process.env.DB_HOST}:${process.env.DB_PORT}`);
    res.json(rows);
  });
});
