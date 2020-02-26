"use strict";

// Import MySQL connection.
const connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
  insertOne: function(table, burgername, devoured, cb) {
    var queryString =
      "INSERT INTO burgers (burger_name, devoured) VALUES (??, ??);";
    connection.query(
      queryString,
      [table, burgername, devoured],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM ??";
    console.log(queryString);
    connection.query(queryString, [table], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, burgername, id, cb) {
    const queryString = "UPDATE ?? SET ?? WHERE ?;";
    connection.query(queryString, [table, burgername, id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // console.log(queryString);
  deleteOne: function(table, id, cb) {
    var queryString = "DELETE FROM ?? WHERE ??";

    connection.query(queryString, [table, id], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
