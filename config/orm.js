const connection = require("./connection.js");

function printQuestionMarks(value) {
  const arr = [];

  for (let i = 0; i < value; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(obj) {
  const arr = [];

  for (var key in obj) {
    arr.push(key + "=" + obj[key]);
  }
  return arr.toString();
}


const orm = {

  all: function(tableInput, callback) {
    var queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
      console.log(result);
    });
  },

  create: function(table, cols, vals, callback) {
    let queryString =
    `INSERT INTO ${table} (${cols.toString()})
     VALUES (${printQuestionMarks(vals.length)});`;

     console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  update: function(table, objColVals, updValue, callback) {

    let queryString =
    `UPDATE ${table} SET ${objToSql(objColVals)}
     WHERE ${updValue};`;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  delete: function(table, updValue, callback) {
  // DELETE FROM burgers WHERE id=3;

    let queryString =
      `DELETE FROM ${table} WHERE id = ${updValue};`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;
