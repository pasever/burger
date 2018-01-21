const orm = require("../config/orm.js");

const burger = {

  all: callback => {
    orm.all("burgers", res => callback(res); );
  },

  create: (name, callback) => {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], callback);
  },

  update: (id, callback) => {
    let updValue = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, updValue, callback);
  },

  delete: (id, callback) => {
    let updValue = `${id}`;
    orm.delete("burgers", updValue, callback);
  }
};

module.exports = burger;
