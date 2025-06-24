const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("../views/index.hbs");
});
route.get("/about", (req, res) => {
  res.render("../views/about.hbs");
});
module.exports = route;
