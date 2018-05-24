/*
  Blogging Application
  Zachary Dobbs -- 2018
  Playing around with NodeJS and MongoDB
*/

// initialize app
var express = require('express');
var app = express();
var http = require('http').Server(app);

// create route to node modules folder for easy referncing
app.use(express.static(__dirname + '/node_modules'));

// define an assets folder location for the app to locate
app.use('/static', express.static(__dirname + '/static'));

// save database info
var DB = require(__dirname + '/scripts/db');

// add a new post to the database
function add_post(DBuri, collName, obj) {
  var database = new DB;
  database.connect(DBuri)
  .then(
    function() {
      // connected, insert the post
      return database.insert(collName, obj);
    },
    function(err) {
      throw("failed to connect to db! " + err);
    })
  .then(
    // checks if insert is success
    function() {
      // success, update the view?
    },
    function(err) {
      throw("failed to insert post! " + err);
    }
  )
}

// handle routing to home
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');

  // // DEBUG testing add_post
  // var obj = {name: "eggs"};
  // add_post("mongodb://localhost:27017/test", "bacon", obj);

});

// serve the app
http.listen(3000, function() {
  console.log("Listening on *:3000");
});
