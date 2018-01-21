const mysql = require("mysql"),
 connection = mysql.createConnection({
    // port: PROCESS.ENV.PORT || 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });

connection.connect(err => {
  if (err) {
    console.error("Error: " + err.stack);
    return;
  }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
