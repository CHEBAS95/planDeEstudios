const express = require("express");
const route = express.Router();

route.get("/users", (req, res) => {
  res.send("aca estoy en el usuario");
});

route.get("/users/singIn", (req, res) => {
  res.render("../views/users/singIn.hbs");
});

route.get("/users/singUp", (req, res) => {
  res.render("../views/users/singUp");
});

module.exports = route;
