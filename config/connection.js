const mysql = require("mysql");

let connection;

if(process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
      connection = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "burgers_db",
      });
  };

connection = mysql.createConnection('mysql://kthc846nvk1a0zam:vavq9smupzswm2sh@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/kw2xnpn2lq6yo56u')

connection.connect(err => {
  if (err) {
    console.error("Error: " + err.stack);
    return;
  }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
