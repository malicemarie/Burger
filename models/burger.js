"use strict";

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  InsertOne: function(vals, cb) {
    orm.InsertOne("burgers", ["burger_name"], vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgername, devour, cb) {
    orm.updateOne("burgers", [burgername, devour], function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
