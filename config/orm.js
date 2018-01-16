const connection = require("./connection.js");

const orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  }





};








module.exports = orm;
