// interact between view and model (DB)

// database info
// var DB = require('./db');
var URI = 'mongodb://localhost:27017/test';

$(function() {

  $("#send-btn").click(function(e) {
    e.preventDefault();
    var coll = 'blog-entries';
    var aTitle = $("#title-txt").val();
    var aBody = $("#body-txt").val();
    var entry = { title: aTitle, body: aBody };
    add_post(URI, coll, entry);
  });

});
