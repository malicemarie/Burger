"use strict";

// Require node modules, and files for server to access
const express = require("express");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller");
const PORT = process.env.PORT || 8800;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
