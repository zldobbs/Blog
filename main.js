/*
  Blogging Application
  Zachary Dobbs
  Playing around with NodeJS and MongoDB
*/

// initialize app
var express = require('express');
var app = express();
var http = require('http').Server(app);

// handle routing to home
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// serve the app
http.listen(3000, function() {
  console.log("Listening on *:3000");
});
