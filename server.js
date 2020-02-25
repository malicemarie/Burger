"use strict";

// Require node modules, and files for server to access
const orm = require("./config/orm");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 8000;

const app = express();

// Tell express to use static content from the public/css files
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

app.listen(PORT, () =>
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`)
);
