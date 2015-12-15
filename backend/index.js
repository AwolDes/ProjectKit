// server.js

// modules

var mongoose = require('mongoose');

var db = mongoose.connection;

var express = require('express');  
var app = express();

var logger = require("morgan");


mongoose.connect('localhost');
mongoose.connection.on('error', function() {
  console.log('← MongoDB Connection Error →');
});

/*Use https://github.com/sahat/ember-sass-express-starter/blob/master/app.js as a reference*/

/** Setting up DB schemas **/

/*
 * Person Schema.
 *
 * @type {mongoose.Schema}
 *

var personSchema = new mongoose.Schema({
  name:  String,
  age: Number
});

/**
 * Person mongoose model.
 *
var Person = mongoose.model('Person', personSchema);*/


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