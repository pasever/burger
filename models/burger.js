const orm = require("../config/orm.js");

const burger = {

  all: function(callcback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  }
  // ,
  // create: function(name, cb) {
  //   orm.create("burgers", [
  //     "burger_name", "devoured"
  //   ], [
  //     name, false
  //   ], cb);
  // },
  // update: function(id, cb) {
  //   var condition = "id=" + id;
  //   orm.update("burgers", {
  //     devoured: true
  //   }, condition, cb);
  // }
};

module.exports = burger;
