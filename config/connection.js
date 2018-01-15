const mysql = require("mysql"),
 connection = mysql.createConnection({
    // port: PROCESS.ENV.PORT || 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });

connection.connect(function(err) {
  if (err) {
    console.error("Error: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
