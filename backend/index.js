// server.js

// modules
var express = require('express');  
var app = express();


var logger = require("morgan");

// set our port
var port = process.env.PORT || 8080;

// set the static files location 
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // configure our routes

// startup our app at http://localhost:3000
app.listen(port);
// Use morgan for all GET and POST info
app.use(logger('dev'));

// expose app
exports = module.exports = app;
console.log("Sever is running on port 8080")