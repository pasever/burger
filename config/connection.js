const mysql = require("mysql");
// const connection = mysql.createConnection({
//     // port: PROCESS.ENV.PORT || 3306,
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "burgers_db"
//   });

const connection = mysql.createConnection('mysql://kthc846nvk1a0zam:vavq9smupzswm2sh@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/kw2xnpn2lq6yo56u')

connection.connect(err => {
  if (err) {
    console.error("Error: " + err.stack);
    return;
  }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
