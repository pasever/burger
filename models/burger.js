const orm = require("../config/orm.js");

const burger = {

  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  create: function(name, callback) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], callback);
  }
  //,
  // update: function(id, cb) {
  //   var condition = "id=" + id;
  //   orm.update("burgers", {
  //     devoured: true
  //   }, condition, cb);
  // }
};

module.exports = burger;
