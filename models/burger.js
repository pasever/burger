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
  },

  update: function(id, callback) {
    let updValue = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, updValue, callback);
  },

  delete: function(id, callback) {
    let updValue = `${id}`;
    orm.delete("burgers", updValue, callback);
  }
};

module.exports = burger;
