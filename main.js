/*
  Blogging Application
  Zachary Dobbs -- 2018
  Playing around with NodeJS and MongoDB
*/

// initialize app
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/db.js');

mongoose.connect(config.database);

mongoose.connection.on('connected', function() {
  console.log('connected to database ' + config.database);
});

mongoose.connection.on('error', function(error) {
  console.log('database connection error: ' + error);
});

const app = express();
const http = require('http').Server(app);
app.use(cors());
app.use(bodyParser.json());

const users = require('./views/users');

app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/static')));
app.use('/users', users);

// var DB = require('/scripts/db.js');

// handle routing to home
app.get('/', function(req, res) {
  console.log('connected to page');
});

// // add a new post to the database
// function add_post(DBuri, collName, obj) {
//   var database = new DB;
//   database.connect(DBuri)
//   .then(
//     function() {
//       // connected, insert the post
//       return database.insert(collName, obj);
//     },
//     function(err) {
//       throw("failed to connect to db! " + err);
//     })
//   .then(
//     // checks if insert is success
//     function() {
//       list_posts(collName);
//     },
//     function(err) {
//       throw("failed to insert post! " + err);
//     }
//   )
// }
//
// function list_posts(coll) {
//   // FIXME i don't believe the database collection is being closed
//   var database = new DB;
//   database.findAll(coll)
//   .then(
//     function(results) {
//       return results;
//     },
//     function(err) {
//       throw("failed to find posts! " + err);
//     }
//   )
// }

// serve the app
http.listen(3000, function() {
  console.log("Listening on *:3000");
});
