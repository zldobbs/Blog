// manage mongodb connections for nodejs

var MongoClient = require('mongodb').MongoClient;

// database object
function DB() {
  this.db = null;
}

// connects the database to specified uri
DB.prototype.connect = function(uri) {
  // HACK this will be changed to the promise object, so save now
  var _this = this;

  return new Promise(function(resolve, reject) {
    // check if already connected
    if (_this.db)
      resolve();
    else {
      MongoClient.connect(uri)
      .then(
        function(database) {
          _this.db = database;
          resolve();
        },
        function(err) {
          console.log("error connecting! " + err.message);
          reject(err.message);
        }
      )
    }
  })
}

// insert obj into coll
DB.prototype.insert = function(coll, obj) {
  var _this = this;

  return new Promise(function(resolve, reject) {
    var database = _this.db.db('test');
    database.collection(coll).insertOne(obj)
    .then(
      function() {
        resolve();
      },
      function(err) {
        console.log("failed to insert! " + err.message);
        reject(err.message);
      }
    )
  })
}

// find all objects within specified collection
DB.prototype.findAll = function(coll) {
  var _this = this;

  return new Promise(function(resolve, reject) {
    var database = _this.db.db('test');
    database.collection(coll).find({}).toArray()
    .then(
      function(results) {
        resolve(results);
      },
      function(err) {
        console.log("failed to findAll! " + err.message);
        reject(err.message);
      }
    )
  })
}

// close the connection to the database
DB.prototype.close = function() {
  if (this.db) {
    this.db.close()
    .then(
      function() {},
      function(err) {
        console.log("failed to close db connection! " + err.message);
      }
    )
  }
}

// Make the module available for use in other files
module.exports = DB;
