const connection = require("./connection.js");

// function printQuestionMarks(num) {
//   var arr = [];
//
//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//
//   return arr.toString();
// }
//
// function objToSql(ob) {
//
//   const arr = [];
//
//   for (var key in ob) {
//     var value = ob[key];
//
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }
//   return arr.toString();
// }

let orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
